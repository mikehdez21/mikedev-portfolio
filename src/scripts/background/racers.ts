type Direction = { x: number; y: number };
type Point = [number, number];

type Racer = {
	x: number;
	y: number;
	direction: Direction;
	trail: Point[];
	visited: Set<string>;
};

const bounds = { width: 1440, height: 900, cell: 64 };
const speed = 110;
const maxTrailPoints = 800;
const directions: Direction[] = [
	{ x: 1, y: 0 },
	{ x: -1, y: 0 },
	{ x: 0, y: 1 },
	{ x: 0, y: -1 },
];

const cellKey = (x: number, y: number): string => `${x}:${y}`;
const isInside = (x: number, y: number): boolean => x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height;
const isCardinal = (direction: Direction): boolean => Math.abs(direction.x) + Math.abs(direction.y) === 1;
const distance = (racer: Racer, point: Point): number => Math.hypot(racer.x - point[0], racer.y - point[1]);

const createRacer = (x: number, y: number, direction: Direction): Racer => ({
	x,
	y,
	direction,
	trail: [[x, y]],
	visited: new Set([cellKey(x, y)]),
});

const chooseDirection = (racer: Racer, target: Racer): void => {
	const opposite = { x: -racer.direction.x, y: -racer.direction.y };
	const options = directions.filter((direction) => {
		if (!isCardinal(direction) || (direction.x === opposite.x && direction.y === opposite.y)) return false;
		const nextX = racer.x + direction.x * bounds.cell;
		const nextY = racer.y + direction.y * bounds.cell;
		return isInside(nextX, nextY) && !racer.visited.has(cellKey(nextX, nextY));
	});

	if (options.length === 0) {
		const canReverse = isInside(racer.x + opposite.x * bounds.cell, racer.y + opposite.y * bounds.cell);
		if (canReverse) racer.direction = opposite;
		return;
	}
	const rankedOptions = options
		.map((direction) => ({
			direction,
			distance: Math.abs(target.x - (racer.x + direction.x * bounds.cell)) + Math.abs(target.y - (racer.y + direction.y * bounds.cell)),
		}))
		.sort((first, second) => first.distance - second.distance);
	const bestDistance = rankedOptions[0].distance;
	const bestOptions = rankedOptions.filter(({ distance: optionDistance }) => optionDistance === bestDistance);

	if (Math.random() < 0.8) {
		racer.direction = bestOptions[Math.floor(Math.random() * bestOptions.length)].direction;
	} else {
		racer.direction = options[Math.floor(Math.random() * options.length)];
	}
};

const nextIntersection = (racer: Racer): number => {
	const { x, y } = racer;
	if (racer.direction.x > 0) return Math.min(bounds.width, Math.floor(x / bounds.cell + 1) * bounds.cell) - x;
	if (racer.direction.x < 0) return x - Math.max(0, Math.ceil(x / bounds.cell - 1) * bounds.cell);
	if (racer.direction.y > 0) return Math.min(bounds.height, Math.floor(y / bounds.cell + 1) * bounds.cell) - y;
	return y - Math.max(0, Math.ceil(y / bounds.cell - 1) * bounds.cell);
};

const moveRacer = (racer: Racer, target: Racer, delta: number): boolean => {
	if (!isCardinal(racer.direction)) racer.direction = directions[0];
	let distanceToMove = speed * delta;

	while (distanceToMove > 0) {
		const distanceToTurn = nextIntersection(racer);
		const step = Math.min(distanceToMove, distanceToTurn || bounds.cell);
		racer.x += racer.direction.x * step;
		racer.y += racer.direction.y * step;
		distanceToMove -= step;

		if (distanceToTurn > 0 && step >= distanceToTurn - 0.001) {
			racer.x = Math.round(racer.x / bounds.cell) * bounds.cell;
			racer.y = Math.round(racer.y / bounds.cell) * bounds.cell;
			const reachedCell = cellKey(racer.x, racer.y);
			if (racer.visited.has(reachedCell) || target.visited.has(reachedCell)) return true;
			racer.visited.add(reachedCell);
			const lastPoint = racer.trail[racer.trail.length - 1];
			if (lastPoint[0] !== racer.x || lastPoint[1] !== racer.y) racer.trail.push([racer.x, racer.y]);
			chooseDirection(racer, target);
		}
	}

	const lastPoint = racer.trail[racer.trail.length - 1];
	if (distance(racer, lastPoint) > 7) racer.trail.push([racer.x, racer.y]);
	if (racer.trail.length > maxTrailPoints) racer.trail.splice(0, racer.trail.length - maxTrailPoints);
	return false;
};

export function initRacers(): void {
	const paths = Array.from(document.querySelectorAll<SVGPathElement>('.racer-track'));
	if (paths.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	let racers: Racer[] = [
		createRacer(0, 832, { x: 0, y: -1 }),
		createRacer(1440, 64, { x: 0, y: 1 }),
	];
	let lastFrame = 0;
	let lastRender = 0;

	const reset = (): void => {
		racers = [
			createRacer(0, 832, { x: 0, y: -1 }),
			createRacer(1440, 64, { x: 0, y: 1 }),
		];
	};

	const animate = (time: number): void => {
		if (document.hidden) return;
		const delta = Math.min((time - lastFrame) / 1000, 0.05);
		lastFrame = time;
		const collision = moveRacer(racers[0], racers[1], delta) || moveRacer(racers[1], racers[0], delta);
		if (collision || Math.hypot(racers[0].x - racers[1].x, racers[0].y - racers[1].y) < 13) reset();

		if (time - lastRender >= 33) {
			paths.forEach((path, index) => {
				path.setAttribute('d', racers[index].trail.map(([x, y], pointIndex) => `${pointIndex ? 'L' : 'M'}${x} ${y}`).join(' '));
			});
			lastRender = time;
		}
		requestAnimationFrame(animate);
	};

	requestAnimationFrame((time) => {
		lastFrame = time;
		requestAnimationFrame(animate);
	});

	document.addEventListener('visibilitychange', () => {
		if (!document.hidden) {
			lastFrame = performance.now();
			requestAnimationFrame(animate);
		}
	});
}

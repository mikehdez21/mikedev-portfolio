export function initPlurGrid(): () => void {
	const techBackground = document.querySelector<HTMLElement>('.tech-background');

	const update = (): void => {
		if (!techBackground) return;
		const gridSize = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
		const gridMarkColor = document.documentElement.dataset.theme === 'light'
			? 'rgba(63, 63, 70, 0.16)'
			: 'rgba(148, 163, 184, 0.1)';
		const shadows: string[] = [];

		for (let row = 1; row * gridSize < window.innerHeight; row += 2) {
			for (let column = 1; column * gridSize < window.innerWidth; column += 2) {
				if (row === 1 && column === 1) continue;
				shadows.push(`${(column - 1) * gridSize}px ${(row - 1) * gridSize}px 0 ${gridMarkColor}`);
			}
		}

		techBackground.style.setProperty('--plur-shadows', shadows.join(', '));
	};

	let resizeFrame = 0;
	const onResize = (): void => {
		if (resizeFrame) return;
		resizeFrame = requestAnimationFrame(() => {
			resizeFrame = 0;
			update();
		});
	};

	update();
	window.addEventListener('resize', onResize);
	return update;
}

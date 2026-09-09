type LayoutTarget = { target: Element; left: number; right: number };

export function initNavLight(): void {
	const navMenu = document.querySelector<HTMLElement>('.navMenu');
	const terminalLine = navMenu?.querySelector<HTMLElement>('.terminal-line');
	if (!navMenu || !terminalLine) return;

	const targets = Array.from(navMenu.querySelectorAll<HTMLElement>(':scope > .terminal-icon, :scope > a, :scope > ul a, :scope > .nav-controls button svg, :scope > .nav-controls button span'));
	let layout: { left: number; width: number; targets: LayoutTarget[] } = { left: 0, width: 0, targets: [] };
	const updateLayout = (): void => {
		const menuBox = navMenu.getBoundingClientRect();
		layout = {
			left: menuBox.left,
			width: menuBox.width,
			targets: targets.map((target) => {
				const targetBox = target.getBoundingClientRect();
				return { target, left: targetBox.left - menuBox.left, right: targetBox.right - menuBox.left };
			}),
		};
	};

	updateLayout();
	window.addEventListener('resize', updateLayout);
	const lightStartedAt = new WeakMap<Element, number>();

	const update = (time: number): void => {
		const phase = (time % 12000) / 12000;
		const start = 10;
		const end = layout.width - 10;
		const lineWidth = layout.width * 0.1;
		let lineStart = start;
		let currentWidth = 0;

		if (phase >= 0.1 && phase < 0.5) {
			const progress = (phase - 0.1) / 0.4;
			const tip = start + (end - start) * progress;
			currentWidth = phase < 0.2 ? lineWidth * ((phase - 0.1) / 0.1) : phase >= 0.4 ? lineWidth * (1 - ((phase - 0.4) / 0.1)) : lineWidth;
			lineStart = tip - currentWidth;
		} else if (phase >= 0.6) {
			const progress = (phase - 0.6) / 0.4;
			const tip = end - (end - start) * progress;
			currentWidth = phase < 0.7 ? lineWidth * ((phase - 0.6) / 0.1) : phase >= 0.9 ? lineWidth * (1 - ((phase - 0.9) / 0.1)) : lineWidth;
			lineStart = tip;
		}

		terminalLine.style.left = `${lineStart}px`;
		terminalLine.style.width = `${currentWidth}px`;
		const lineBox = terminalLine.getBoundingClientRect();
		const lineTip = currentWidth > 0 ? (phase >= 0.1 && phase < 0.5 ? lineBox.right : lineBox.left) - layout.left : null;

		layout.targets.forEach(({ target, left, right }) => {
			const underTip = lineTip !== null && lineTip >= left && lineTip <= right;
			if (!underTip) {
				lightStartedAt.delete(target);
				target.classList.remove('nav-lit');
				return;
			}
			if (!lightStartedAt.has(target)) lightStartedAt.set(target, time);
			target.classList.toggle('nav-lit', time - (lightStartedAt.get(target) ?? time) <= 500);
		});

		requestAnimationFrame(update);
	};

	requestAnimationFrame(update);
}

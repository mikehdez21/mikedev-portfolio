export function initMenu(): void {
	const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
	const primaryNavigation = document.querySelector<HTMLElement>('#primary-navigation');

	const closeMenu = (): void => {
		menuToggle?.setAttribute('aria-expanded', 'false');
		menuToggle?.setAttribute('aria-label', 'Abrir menú');
		primaryNavigation?.classList.remove('is-open');
	};

	menuToggle?.addEventListener('click', () => {
		const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
		primaryNavigation?.classList.toggle('is-open', !isOpen);
		requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
	});

	primaryNavigation?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	document.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'Escape') closeMenu();
	});
}

export function initTheme(onThemeChange: () => void): void {
	const modeToggle = document.querySelector<HTMLButtonElement>('.mode-toggle');
	const languageToggle = document.querySelector<HTMLButtonElement>('.language-toggle');

	modeToggle?.addEventListener('click', () => {
		const isLight = document.documentElement.dataset.theme === 'light';
		document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
		modeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
		onThemeChange();
	});

	languageToggle?.addEventListener('click', () => {
		const language = languageToggle.querySelector('span');
		const isSpanish = language?.textContent === 'ES';
		if (language) language.textContent = isSpanish ? 'EN' : 'ES';
		languageToggle.setAttribute(
			'aria-label',
			`Cambiar idioma, actualmente ${isSpanish ? 'inglés' : 'español'}`,
		);
	});
}

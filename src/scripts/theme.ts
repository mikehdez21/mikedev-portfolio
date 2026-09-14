export function initTheme(onThemeChange: () => void): void {
	const modeToggle = document.querySelector<HTMLButtonElement>('.mode-toggle');
	const languageToggle = document.querySelector<HTMLButtonElement>('.language-toggle');
	const cvLink = document.querySelector<HTMLAnchorElement>('[data-cv-link]');

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
		const selectedLanguage = isSpanish ? 'en' : 'es';
		const cvUrl = cvLink?.dataset[`cv${selectedLanguage === 'es' ? 'Es' : 'En'}`];
		const cvDownloadName = cvLink?.dataset[`cvDownload${selectedLanguage === 'es' ? 'Es' : 'En'}`];
		if (cvLink && cvUrl && cvDownloadName) {
			cvLink.href = cvUrl;
			cvLink.download = cvDownloadName;
		}
		languageToggle.setAttribute(
			'aria-label',
			`Cambiar idioma, actualmente ${isSpanish ? 'inglés' : 'español'}`,
		);
	});
}

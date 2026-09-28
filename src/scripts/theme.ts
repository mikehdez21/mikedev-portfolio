import { getLocale, onLocaleChange, t } from '@/i18n';

export function initTheme(onThemeChange: () => void): void {
	const modeToggle = document.querySelector<HTMLButtonElement>('.mode-toggle');
	const cvLink = document.querySelector<HTMLAnchorElement>('[data-cv-link]');

	const applyModeLabels = (): void => {
		const isLight = document.documentElement.dataset.theme === 'light';
		modeToggle?.setAttribute('aria-label', t(isLight ? 'nav.themeToDark' : 'nav.themeToLight'));
	};

	const applyCvLink = (): void => {
		if (!cvLink) return;
		const suffix = getLocale() === 'es' ? 'Es' : 'En';
		const cvUrl = cvLink.dataset[`cv${suffix}`];
		const cvDownloadName = cvLink.dataset[`cvDownload${suffix}`];
		if (cvUrl && cvDownloadName) {
			cvLink.href = cvUrl;
			cvLink.download = cvDownloadName;
		}
	};

	modeToggle?.addEventListener('click', () => {
		const isLight = document.documentElement.dataset.theme === 'light';
		document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
		applyModeLabels();
		onThemeChange();
	});

	onLocaleChange(() => {
		applyModeLabels();
		applyCvLink();
	});

	applyModeLabels();
	applyCvLink();
}

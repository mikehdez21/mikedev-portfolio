import { onLocaleChange, t } from '@/i18n';

export function initSectionToggles(): void {
	const toggles = document.querySelectorAll<HTMLButtonElement>('[data-section-toggle]');

	const titleOf = (toggle: HTMLElement): string =>
		toggle.querySelector<HTMLElement>('[data-i18n-path]:not([hidden])')?.textContent?.trim() ?? '';

	const applyLabel = (toggle: HTMLElement): void => {
		const expanded = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-label', t(expanded ? 'section.collapse' : 'section.expand', { title: titleOf(toggle) }));
	};

	toggles.forEach((toggle) => {
		const contentId = toggle.getAttribute('aria-controls');
		const content = contentId ? document.getElementById(contentId) : null;

		if (!content) {
			return;
		}

		applyLabel(toggle);

		toggle.addEventListener('click', () => {
			const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
			const nextExpanded = !isExpanded;
			const section = toggle.closest('section');

			toggle.setAttribute('aria-expanded', String(nextExpanded));
			content.hidden = !nextExpanded;
			section?.classList.toggle('section-collapsed', !nextExpanded);
			applyLabel(toggle);
		});
	});

	onLocaleChange(() => {
		toggles.forEach((toggle) => applyLabel(toggle));
	});
}

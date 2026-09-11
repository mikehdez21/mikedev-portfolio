export function initSectionToggles(): void {
	const toggles = document.querySelectorAll<HTMLButtonElement>('[data-section-toggle]');

	toggles.forEach((toggle) => {
		const contentId = toggle.getAttribute('aria-controls');
		const content = contentId ? document.getElementById(contentId) : null;

		if (!content) {
			return;
		}

		toggle.addEventListener('click', () => {
			const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
			const nextExpanded = !isExpanded;
			const section = toggle.closest('section');

			toggle.setAttribute('aria-expanded', String(nextExpanded));
			toggle.setAttribute(
				'aria-label',
				nextExpanded ? `Contraer ${toggle.textContent?.trim() ?? 'sección'}` : `Expandir ${toggle.textContent?.trim() ?? 'sección'}`,
			);
			content.hidden = !nextExpanded;
			section?.classList.toggle('section-collapsed', !nextExpanded);
		});
	});
}

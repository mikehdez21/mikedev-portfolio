import { getLocale, isLocale, onLocaleChange, readStoredLocale, setLocale, storeLocale, t, tList } from '@/i18n';
import type { Locale } from '@/i18n';

type ParamSource = { [key: string]: string | number };

function paramsOf(element: Element, attribute: string): ParamSource | undefined {
	const value = element.getAttribute(attribute);
	if (!value) return undefined;

	const params: ParamSource = {};
	for (const pair of value.split(',')) {
		const [key, raw] = pair.split(':');
		if (key && raw !== undefined) params[key.trim()] = raw.trim();
	}
	return Object.keys(params).length > 0 ? params : undefined;
}

function resolveListText(element: Element, locale: Locale): string | null {
	const path = element.getAttribute('data-i18n-path');
	if (!path) return null;

	const index = Number(element.getAttribute('data-i18n-index') ?? '0');
	const params = paramsOf(element, 'data-i18n-params');
	const list = tList(path, params, locale);
	return list[index] ?? null;
}

function resolveText(element: Element, locale: Locale): string | null {
	const listText = resolveListText(element, locale);
	if (listText !== null) return listText;

	const path = element.getAttribute('data-i18n-path');
	if (!path) return null;

	return t(path, paramsOf(element, 'data-i18n-params'), locale);
}

function applyAttributeValue(element: Element, attribute: string, locale: Locale): void {
	const path = element.getAttribute(`data-i18n-${attribute}`);
	if (!path) return;

	const params = paramsOf(element, `data-i18n-${attribute}-params`);
	element.setAttribute(attribute, t(path, params, locale));
}

const TEXT_ATTRIBUTES = ['aria-label', 'title', 'alt', 'placeholder', 'content'] as const;

export function initI18n(): void {
	const stored = readStoredLocale();
	if (stored && stored !== getLocale()) {
		setLocale(stored);
	}

	applyLocale(getLocale());
	onLocaleChange((locale) => applyLocale(locale));

	const toggle = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
	const label = document.querySelector<HTMLElement>('[data-language-label]');

	const refreshLabel = (locale: Locale): void => {
		if (label) label.textContent = locale === 'en' ? 'ES' : 'EN';
	};

	refreshLabel(getLocale());

	toggle?.addEventListener('click', () => {
		const next: Locale = getLocale() === 'en' ? 'es' : 'en';
		storeLocale(next);
		setLocale(next);
		refreshLabel(next);
	});
}

function applyLocale(locale: Locale): void {
	if (!isLocale(locale)) return;

	document.documentElement.lang = locale;

	document.querySelectorAll<HTMLElement>('[data-lang]').forEach((element) => {
		element.hidden = element.dataset.lang !== locale;
	});

	const languageToggle = document.querySelector<HTMLElement>('[data-language-toggle]');
	if (languageToggle) {
		languageToggle.setAttribute('aria-label', t(locale === 'en' ? 'nav.languageToSpanish' : 'nav.languageToEnglish'));
	}

	document.querySelectorAll<HTMLElement>('[data-i18n-path]').forEach((element) => {
		if (element.hasAttribute('data-lang')) return;

		const resolved = resolveText(element, locale);
		if (resolved !== null) element.textContent = resolved;
	});

	for (const attribute of TEXT_ATTRIBUTES) {
		document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
			applyAttributeValue(element, attribute, locale);
		});
	}

	const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
	if (description) {
		const path = description.getAttribute('data-i18n-content');
		if (path) description.content = t(path, undefined, locale);
	}

	const title = document.querySelector<HTMLTitleElement>('title[data-i18n-path]');
	if (title) title.textContent = t(title.dataset.i18nPath ?? '', undefined, locale);
}

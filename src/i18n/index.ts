import en from './en';
import es from './es';

export type Locale = 'en' | 'es';
export type Params = Record<string, string | number>;

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: readonly Locale[] = ['en', 'es'] as const;

const dictionaries = { en, es } as const;

const STORAGE_KEY = 'portfolio:locale';

let activeLocale: Locale = DEFAULT_LOCALE;
const listeners = new Set<(locale: Locale) => void>();

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}

export function getLocale(): Locale {
	return activeLocale;
}

export function setLocale(locale: Locale): void {
	if (locale === activeLocale) return;
	activeLocale = locale;
	listeners.forEach((listener) => listener(locale));
}

export function onLocaleChange(listener: (locale: Locale) => void): void {
	listeners.add(listener);
}

function read(node: unknown, path: string): unknown {
	if (typeof node !== 'object' || node === null) return undefined;

	let current: unknown = node;
	for (const key of path.split('.')) {
		if (typeof current !== 'object' || current === null) return undefined;
		current = (current as Record<string, unknown>)[key];
	}
	return current;
}

function interpolate(value: string, params?: Params): string {
	if (!params) return value;
	return value.replace(/\{(\w+)\}/g, (match, key: string) =>
		key in params ? String(params[key]) : match,
	);
}

export function t(path: string, params?: Params, locale: Locale = activeLocale): string {
	const value = read(dictionaries[locale], path);
	if (typeof value === 'string') return interpolate(value, params);
	if (Array.isArray(value)) return value.map((item) => interpolate(String(item), params)).join(' ');
	return path;
}

export function tList(path: string, params?: Params, locale: Locale = activeLocale): string[] {
	const value = read(dictionaries[locale], path);
	if (!Array.isArray(value)) return [];
	return value.map((item) => interpolate(String(item), params));
}

export function readStoredLocale(): Locale | null {
	if (typeof localStorage === 'undefined') return null;
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored !== null && isLocale(stored) ? stored : null;
}

export function storeLocale(locale: Locale): void {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, locale);
}

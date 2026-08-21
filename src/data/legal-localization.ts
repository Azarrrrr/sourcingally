import { legalLocales } from './legal-locales';
import generatedLegalTranslations from './generatedLegalTranslations.json';

type LegalPolicy = 'privacy' | 'terms' | 'disclaimer' | 'editorial';
type Dictionary = Record<string, string>;
const generated = generatedLegalTranslations as Partial<Record<string, Dictionary>>;

function localizeValue<T>(value: T, dictionary?: Dictionary): T {
  if (!dictionary) return value;
  if (typeof value === 'string') return (dictionary[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((entry) => localizeValue(entry, dictionary)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, localizeValue(entry, dictionary)])) as T;
  }
  return value;
}

export function legalCopy(lang: string, policy: LegalPolicy) {
  const existing = legalLocales[lang as keyof typeof legalLocales]?.[policy];
  return existing ?? localizeValue(legalLocales.en[policy], generated[lang]);
}

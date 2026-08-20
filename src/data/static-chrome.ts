import translations from './generatedStaticChromeTranslations.json';

export function chromeLabel(locale: string, source: string): string {
  return (translations as Record<string, Record<string, string>>)[locale]?.[source] ?? source;
}

export function sequenceLabel(locale: string, sequence: string, source: string): string {
  return `${sequence} / ${chromeLabel(locale, source)}`;
}

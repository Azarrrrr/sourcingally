export type PartialFoundationLanguage = 'ja' | 'de' | 'ar' | 'id' | 'it';
export type FoundationRouteKey = 'howWeWork' | 'feesAndScope';

interface RouteFallbackCopy {
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  notice: string;
  englishLink: string;
  localLink: string;
}

export const foundationRouteFallbacks: Record<
  PartialFoundationLanguage,
  Record<FoundationRouteKey, RouteFallbackCopy>
> = {
  ja: {
    howWeWork: {
      title: 'Sourcing Allyの進め方',
      metaTitle: 'Sourcing Allyの進め方 | 翻訳案内',
      metaDescription: 'このページの翻訳状況をご案内します。',
      eyebrow: 'ページの翻訳状況',
      notice: 'このページの詳しい内容はまだ日本語に翻訳されていません。現在、英語で全文をご覧いただけます。',
      englishLink: '英語で全文を読む',
      localLink: '日本語のサービスを見る',
    },
    feesAndScope: {
      title: '料金と対応範囲',
      metaTitle: '料金と対応範囲 | 翻訳案内',
      metaDescription: '料金と対応範囲ページの翻訳状況をご案内します。',
      eyebrow: 'ページの翻訳状況',
      notice: '料金と対応範囲の詳しい説明はまだ日本語に翻訳されていません。現在、英語で全文をご覧いただけます。',
      englishLink: '英語で全文を読む',
      localLink: '日本語のサービスを見る',
    },
  },
  de: {
    howWeWork: {
      title: 'So arbeitet Sourcing Ally',
      metaTitle: 'So arbeitet Sourcing Ally | Übersetzungshinweis',
      metaDescription: 'Hinweis zum Übersetzungsstand dieser Seite.',
      eyebrow: 'Hinweis zum Übersetzungsstand',
      notice: 'Diese Seite ist noch nicht vollständig ins Deutsche übersetzt. Die vollständigen Informationen sind derzeit auf Englisch verfügbar.',
      englishLink: 'Vollständige Seite auf Englisch lesen',
      localLink: 'Serviceangebote auf Deutsch ansehen',
    },
    feesAndScope: {
      title: 'Gebühren und Leistungsumfang',
      metaTitle: 'Gebühren und Leistungsumfang | Übersetzungshinweis',
      metaDescription: 'Hinweis zum Übersetzungsstand der Seite zu Gebühren und Leistungsumfang.',
      eyebrow: 'Hinweis zum Übersetzungsstand',
      notice: 'Die ausführlichen Informationen zu Gebühren und Leistungsumfang sind noch nicht vollständig ins Deutsche übersetzt. Sie sind derzeit auf Englisch verfügbar.',
      englishLink: 'Vollständige Seite auf Englisch lesen',
      localLink: 'Serviceangebote auf Deutsch ansehen',
    },
  },
  ar: {
    howWeWork: {
      title: 'كيف تعمل Sourcing Ally',
      metaTitle: 'كيف تعمل Sourcing Ally | حالة الترجمة',
      metaDescription: 'معلومات عن حالة ترجمة هذه الصفحة.',
      eyebrow: 'حالة الترجمة',
      notice: 'لم تُترجم هذه الصفحة بالكامل إلى العربية بعد. تتوفر المعلومات الكاملة باللغة الإنجليزية حاليًا.',
      englishLink: 'اقرأ الصفحة كاملةً بالإنجليزية',
      localLink: 'تصفّح الخدمات بالعربية',
    },
    feesAndScope: {
      title: 'الرسوم ونطاق العمل',
      metaTitle: 'الرسوم ونطاق العمل | حالة الترجمة',
      metaDescription: 'معلومات عن حالة ترجمة صفحة الرسوم ونطاق العمل.',
      eyebrow: 'حالة الترجمة',
      notice: 'لم تُترجم التفاصيل الكاملة للرسوم ونطاق العمل إلى العربية بعد. تتوفر حاليًا باللغة الإنجليزية.',
      englishLink: 'اقرأ الصفحة كاملةً بالإنجليزية',
      localLink: 'تصفّح الخدمات بالعربية',
    },
  },
  id: {
    howWeWork: {
      title: 'Cara kerja Sourcing Ally',
      metaTitle: 'Cara kerja Sourcing Ally | Informasi terjemahan',
      metaDescription: 'Informasi tentang status terjemahan halaman ini.',
      eyebrow: 'Status terjemahan',
      notice: 'Halaman ini belum sepenuhnya diterjemahkan ke bahasa Indonesia. Informasi lengkap saat ini tersedia dalam bahasa Inggris.',
      englishLink: 'Baca halaman lengkap dalam bahasa Inggris',
      localLink: 'Lihat layanan dalam bahasa Indonesia',
    },
    feesAndScope: {
      title: 'Biaya dan cakupan layanan',
      metaTitle: 'Biaya dan cakupan layanan | Informasi terjemahan',
      metaDescription: 'Informasi tentang status terjemahan halaman biaya dan cakupan layanan.',
      eyebrow: 'Status terjemahan',
      notice: 'Penjelasan lengkap tentang biaya dan cakupan layanan belum sepenuhnya diterjemahkan ke bahasa Indonesia. Saat ini, penjelasan lengkap tersedia dalam bahasa Inggris.',
      englishLink: 'Baca halaman lengkap dalam bahasa Inggris',
      localLink: 'Lihat layanan dalam bahasa Indonesia',
    },
  },
  it: {
    howWeWork: {
      title: 'Come lavora Sourcing Ally',
      metaTitle: 'Come lavora Sourcing Ally | Nota sulla traduzione',
      metaDescription: 'Informazioni sullo stato della traduzione di questa pagina.',
      eyebrow: 'Stato della traduzione',
      notice: 'Questa pagina non è ancora stata tradotta interamente in italiano. Le informazioni complete sono al momento disponibili in inglese.',
      englishLink: 'Leggi la pagina completa in inglese',
      localLink: 'Scopri i servizi in italiano',
    },
    feesAndScope: {
      title: 'Tariffe e ambito del servizio',
      metaTitle: 'Tariffe e ambito del servizio | Nota sulla traduzione',
      metaDescription: 'Informazioni sullo stato della traduzione della pagina su tariffe e ambito.',
      eyebrow: 'Stato della traduzione',
      notice: 'Le informazioni complete su tariffe e ambito del servizio non sono ancora state tradotte interamente in italiano. Al momento sono disponibili in inglese.',
      englishLink: 'Leggi la pagina completa in inglese',
      localLink: 'Scopri i servizi in italiano',
    },
  },
};

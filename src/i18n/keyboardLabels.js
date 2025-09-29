const DEFAULT_LOCALE = 'en';

const LABELS = {
  en: {
    backspace: 'backspace',
    enterWithArrow: '< enter',
    returnKey: 'return',
  },
  fr: {
    backspace: 'effacer',
    enterWithArrow: '< entrée',
    returnKey: 'entrée',
  },
  de: {
    backspace: 'löschen',
    enterWithArrow: '< eingabe',
    returnKey: 'eingabe',
  },
  es: {
    backspace: 'retroceso',
    enterWithArrow: '< intro',
    returnKey: 'intro',
  },
  it: {
    backspace: 'cancella',
    enterWithArrow: '< invio',
    returnKey: 'invio',
  },
  pt: {
    backspace: 'retrocesso',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  pt_br: {
    backspace: 'apagar',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  nl: {
    backspace: 'backspace',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  sv: {
    backspace: 'backsteg',
    enterWithArrow: '< retur',
    returnKey: 'retur',
  },
  da: {
    backspace: 'slet',
    enterWithArrow: '< retur',
    returnKey: 'retur',
  },
  nb: {
    backspace: 'slett',
    enterWithArrow: '< retur',
    returnKey: 'retur',
  },
  fi: {
    backspace: 'askelpalautin',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  pl: {
    backspace: 'usuń',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  cs: {
    backspace: 'zpět',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  sk: {
    backspace: 'späť',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  hr: {
    backspace: 'brisanje',
    enterWithArrow: '< unos',
    returnKey: 'unos',
  },
  ro: {
    backspace: 'ștergere',
    enterWithArrow: '< intrare',
    returnKey: 'intrare',
  },
  el: {
    backspace: 'διαγραφή',
    enterWithArrow: '< εισαγωγή',
    returnKey: 'εισαγωγή',
  },
  tr: {
    backspace: 'geri sil',
    enterWithArrow: '< giriş',
    returnKey: 'giriş',
  },
  ru: {
    backspace: 'удалить',
    enterWithArrow: '< ввод',
    returnKey: 'ввод',
  },
  uk: {
    backspace: 'стерти',
    enterWithArrow: '< ентер',
    returnKey: 'ентер',
  },
  zh_cn: {
    backspace: '删除',
    enterWithArrow: '< 回车',
    returnKey: '回车',
  },
  zh_tw: {
    backspace: '刪除',
    enterWithArrow: '< 換行',
    returnKey: '換行',
  },
  vi: {
    backspace: 'xóa',
    enterWithArrow: '< enter',
    returnKey: 'enter',
  },
  ja: {
    backspace: 'バックスペース',
    enterWithArrow: '< エンター',
    returnKey: 'エンター',
  },
  ko: {
    backspace: '백스페이스',
    enterWithArrow: '< 엔터',
    returnKey: '엔터',
  },
  ar: {
    backspace: 'حذف',
    enterWithArrow: 'إدخال',
    returnKey: 'إدخال',
  },
  he: {
    backspace: 'מחיקה',
    enterWithArrow: '< אנטר',
    returnKey: 'אנטר',
  },
  fa: {
    backspace: 'حذف',
    enterWithArrow: '< اینتر',
    returnKey: 'اینتر',
  },
  hi: {
    backspace: 'बैकस्पेस',
    enterWithArrow: '< एंटर',
    returnKey: 'एंटर',
  },
  kn: {
    backspace: 'ಬ್ಯಾಕ್ಸ್ಪೇಸ್',
    enterWithArrow: '< ಎಂಟರ್',
    returnKey: 'ಎಂಟರ್',
  },
  ur: {
    backspace: 'بیک اسپیس',
    enterWithArrow: '< انٹر',
    returnKey: 'انٹر',
  },
  th: {
    backspace: 'ลบ',
    enterWithArrow: '< เอนเทอร์',
    returnKey: 'เอนเทอร์',
  },
  ka: {
    backspace: 'წაშლა',
    enterWithArrow: '< შეყვანა',
    returnKey: 'შეყვანა',
  },
};

const LOCALE_ALIASES = {
  zh: 'zh_cn',
  zh_hans: 'zh_cn',
  zh_hant: 'zh_tw',
  zh_hk: 'zh_tw',
  zh_mo: 'zh_tw',
};

function normalizeLocale(locale) {
  if (!locale || typeof locale !== 'string') {
    return DEFAULT_LOCALE;
  }

  return locale.trim().toLowerCase().replace(/-/g, '_');
}

function resolveLocale(locale) {
  const normalized = normalizeLocale(locale);

  if (LABELS[normalized]) {
    return normalized;
  }

  if (LOCALE_ALIASES[normalized]) {
    return LOCALE_ALIASES[normalized];
  }

  const base = normalized.split('_')[0];

  if (LABELS[base]) {
    return base;
  }

  if (LOCALE_ALIASES[base]) {
    return LOCALE_ALIASES[base];
  }

  return DEFAULT_LOCALE;
}

export function getKeyboardLabels(locale) {
  const resolved = resolveLocale(locale);
  const fallback = LABELS[DEFAULT_LOCALE];
  const labels = LABELS[resolved] || fallback;

  return {
    backspace: labels.backspace || fallback.backspace,
    enterWithArrow: labels.enterWithArrow || fallback.enterWithArrow,
    returnKey: labels.returnKey || fallback.returnKey,
  };
}

export { DEFAULT_LOCALE };

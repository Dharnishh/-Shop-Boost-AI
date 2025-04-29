
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en';
import hiTranslations from './locales/hi';
import teTranslations from './locales/te';
import taTranslations from './locales/ta';

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
    hi: hiTranslations,
    te: teTranslations,
    ta: taTranslations
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

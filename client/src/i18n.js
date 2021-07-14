import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './assets/locales/en_GB.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: resources,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

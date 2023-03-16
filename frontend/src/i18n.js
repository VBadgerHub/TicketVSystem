import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi) 
  .init({
    supportedLangs: ['pl', 'en'],
    fallbackLng: 'pl',
    detection: {
      order: [ 'cookie', 'htmlTag', 'querystring',  'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: [ 'cookie' ]
    },    
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',   
    },
    react: {
      useSuspense: false 
    }
  });

  export default i18n;
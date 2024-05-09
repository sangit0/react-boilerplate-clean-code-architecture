import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageCodes } from '~/common/consts/language-codes';

export const i18nInit = () => {
  i18n.use(initReactI18next).init({
    lng: LanguageCodes.en,
    fallbackLng: LanguageCodes.en,
    debug: false,
  });
};

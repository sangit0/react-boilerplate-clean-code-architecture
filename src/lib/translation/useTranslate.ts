import { useTranslation } from 'react-i18next';

/**
 * Custom hook that wraps the useTranslation hook from react-i18next.
 * Returns a function that takes a translation key as an argument and returns the translated text.
 * @returns {(text: string) => string} Translation function
 */
export const useTranslate = () => {
  const { t } = useTranslation();
  return (text: string) => {
    return t(text);
  };
};

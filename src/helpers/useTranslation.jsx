import { useContext } from 'react';
import { translation } from 'helpers/translation';
import LanguageContext from 'helpers/languageContext';

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const languages = Object.keys(translation);

  const translate = (key) => translation?.[language]?.[key];
  return { translate, setLanguage, language, languages };
};

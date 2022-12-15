import { useContext } from 'react';
import { translation } from 'localization/translation';
import LanguageContext from 'context/languageContext';

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const languages = Object.keys(translation);

  const translate = (key) => translation?.[language]?.[key];
  return { translate, setLanguage, language, languages };
};

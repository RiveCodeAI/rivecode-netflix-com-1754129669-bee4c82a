import { useState, useCallback } from 'react';

interface Language {
  code: string;
  name: string;
}

const AVAILABLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' }
];

interface UseLanguageReturn {
  currentLanguage: Language;
  availableLanguages: Language[];
  setLanguage: (code: string) => void;
  toggleLanguageMenu: () => void;
  isLanguageMenuOpen: boolean;
}

export const useLanguage = (initialLanguage: string = 'en'): UseLanguageReturn => {
  const [currentLanguageCode, setCurrentLanguageCode] = useState(initialLanguage);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const currentLanguage = AVAILABLE_LANGUAGES.find(lang => lang.code === currentLanguageCode) || AVAILABLE_LANGUAGES[0];

  const setLanguage = useCallback((code: string) => {
    setCurrentLanguageCode(code);
    setIsLanguageMenuOpen(false);
    document.documentElement.lang = code;
  }, []);

  const toggleLanguageMenu = useCallback(() => {
    setIsLanguageMenuOpen(prev => !prev);
  }, []);

  return {
    currentLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
    setLanguage,
    toggleLanguageMenu,
    isLanguageMenuOpen
  };
};
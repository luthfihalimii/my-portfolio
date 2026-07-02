import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { PortfolioLanguage } from "./portfolio-language";
import {
  portfolioCopy,
  localizedPortfolioContent,
  getStoredPortfolioLanguage,
  setStoredPortfolioLanguage,
  PORTFOLIO_LANGUAGE_EVENT,
} from "./portfolio-language";

type LanguageContextType = {
  language: PortfolioLanguage;
  copy: (typeof portfolioCopy)[PortfolioLanguage];
  localized: (typeof localizedPortfolioContent)[PortfolioLanguage];
  setLanguage: (lang: PortfolioLanguage) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<PortfolioLanguage>(
    typeof window !== "undefined" ? getStoredPortfolioLanguage() : "id"
  );

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: PortfolioLanguage }>;
      if (customEvent.detail?.language) {
        setLanguageState(customEvent.detail.language);
      }
    };

    window.addEventListener(PORTFOLIO_LANGUAGE_EVENT, handleLanguageChange);
    return () =>
      window.removeEventListener(PORTFOLIO_LANGUAGE_EVENT, handleLanguageChange);
  }, []);

  const handleSetLanguage = (lang: PortfolioLanguage) => {
    setStoredPortfolioLanguage(lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        copy: portfolioCopy[language],
        localized: localizedPortfolioContent[language],
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
}

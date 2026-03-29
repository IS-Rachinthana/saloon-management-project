"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { type LanguageCode, translations } from "@/lib/translations";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

const STORAGE_KEY = "hair-warna-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;

    if (savedLanguage && savedLanguage in translations) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: handleSetLanguage
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

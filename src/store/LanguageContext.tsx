import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "@/constants/translations";
import type { Translations } from "@/constants/translations";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isArabic: boolean;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang_user_choice");
      if (saved === "ar" || saved === "en") return saved;
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang_user_choice", lang);
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  useEffect(() => {
    const isAr = language === "ar";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = language;
    if (isAr) {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    isArabic: language === "ar",
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

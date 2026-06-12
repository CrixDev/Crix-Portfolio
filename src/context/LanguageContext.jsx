import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/profile";

const LanguageContext = createContext();

const DEFAULT_LANG = "en";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || DEFAULT_LANG
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// useT() -> active-language content tree (prose + ui strings)
export function useT() {
  return useContext(LanguageContext);
}

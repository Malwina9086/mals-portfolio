import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages } from "./dict";

export type Lang = "pl" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const I18nCtx = createContext<Ctx | null>(null);

function guessFromNavigator(): Lang {
  const nav = navigator.language.toLowerCase();
  return nav.startsWith("pl") ? "pl" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pl" || saved === "en") return saved;
    return guessFromNavigator();
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = messages[lang] ?? messages.en;
    return (k: string) => dict[k] ?? k;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

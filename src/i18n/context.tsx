// src/i18n/context.tsx
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Lang } from "./dict";
import { I18nCtx, type I18nCtxValue } from "./ctx";

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
    const dict = messages[lang] || messages.en;
    return (k: string) => dict[k] ?? k;
  }, [lang]);

  const value = useMemo<I18nCtxValue>(
    () => ({ lang, setLang: setLangState, t }),
    [lang, t]
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

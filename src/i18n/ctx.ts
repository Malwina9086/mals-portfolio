// src/i18n/ctx.ts
import { createContext } from "react";
import type { Lang } from "./dict";

export type I18nCtxValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
};

export const I18nCtx = createContext<I18nCtxValue | null>(null);

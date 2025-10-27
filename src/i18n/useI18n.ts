// src/i18n/useI18n.ts
import { useContext } from "react";
import { I18nCtx } from "./ctx";

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

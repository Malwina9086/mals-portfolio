// src/theme.ts
import { useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getSavedTheme(): Theme | null {
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" ? v : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme(): Theme {
  const initial = getSavedTheme() ?? getSystemTheme();
  applyTheme(initial);
  return initial;
}

export function listenSystemTheme(cb: (t: Theme) => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => cb(mq.matches ? "dark" : "light");
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}

/** Hook do użycia w komponentach (Navbar) */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => initTheme());

  useEffect(() => {
    // reaguj na zmianę systemowego motywu, jeśli użytkownik wcześniej nic nie wybrał
    if (getSavedTheme() !== null) return;
    const off = listenSystemTheme((t) => {
      setTheme(t);
      applyTheme(t);
    });
    return off;
  }, []);

  const setAndApply = useCallback((t: Theme) => {
    setTheme(t);
    applyTheme(t);
  }, []);

  const toggle = useCallback(() => {
    setAndApply(theme === "dark" ? "light" : "dark");
  }, [theme, setAndApply]);

  return { theme, setTheme: setAndApply, toggle };
}

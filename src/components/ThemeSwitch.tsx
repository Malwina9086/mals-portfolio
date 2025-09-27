// src/components/ThemeSwitch.tsx
import { useEffect, useSyncExternalStore, useState } from "react";
import { initTheme, toggleTheme, isDark } from "../utils/theme";

function subscribe(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

/** Prosty przełącznik 🌞/🌙 */
export default function ThemeSwitch({ className = "" }: { className?: string }) {
  // zsynchronizuj się ze stanem dokumentu
  const dark = useSyncExternalStore(
    subscribe,
    () => isDark(),
    () => false
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initTheme(); // pewność, że nawigacja od razu ma poprawny motyw
    setMounted(true);
  }, []);

  // SSR/initial flash guard
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={dark}
      title={dark ? "Tryb ciemny – kliknij, by przełączyć na jasny" : "Tryb jasny – kliknij, by przełączyć na ciemny"}
      className={[
        "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm",
        "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm",
        "hover:bg-emerald-50 dark:hover:bg-emerald-900/30",
        "transition shadow-sm",
        className,
      ].join(" ")}
    >
      <span className="text-lg" aria-hidden>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Ciemny" : "Jasny"}</span>
    </button>
  );
}

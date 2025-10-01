// src/components/ThemeSwitch.tsx
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useTheme, initTheme } from "../utils/theme";

export default function ThemeSwitch({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initTheme();
    setMounted(true);
  }, []);

=======
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
>>>>>>> 5606bca (Initial commit (full project from old laptop))
  if (!mounted) return null;

  return (
    <button
      type="button"
<<<<<<< HEAD
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Tryb ciemny – kliknij, by przełączyć na jasny" : "Tryb jasny – kliknij, by przełączyć na ciemny"}
=======
      onClick={toggleTheme}
      aria-pressed={dark}
      title={dark ? "Tryb ciemny – kliknij, by przełączyć na jasny" : "Tryb jasny – kliknij, by przełączyć na ciemny"}
>>>>>>> 5606bca (Initial commit (full project from old laptop))
      className={[
        "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm",
        "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm",
        "hover:bg-emerald-50 dark:hover:bg-emerald-900/30",
        "transition shadow-sm",
        className,
      ].join(" ")}
    >
<<<<<<< HEAD
      <span className="text-lg" aria-hidden>{theme === "dark" ? "🌙" : "🌞"}</span>
      <span className="hidden sm:inline">{theme === "dark" ? "Ciemny" : "Jasny"}</span>
=======
      <span className="text-lg" aria-hidden>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Ciemny" : "Jasny"}</span>
>>>>>>> 5606bca (Initial commit (full project from old laptop))
    </button>
  );
}

// src/components/ThemeSwitch.tsx
import { useEffect, useState } from "react";
import { useTheme, initTheme } from "../utils/theme";

export default function ThemeSwitch({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initTheme();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Tryb ciemny – kliknij, by przełączyć na jasny" : "Tryb jasny – kliknij, by przełączyć na ciemny"}
      className={[
        "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm",
        "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm",
        "hover:bg-emerald-50 dark:hover:bg-emerald-900/30",
        "transition shadow-sm",
        className,
      ].join(" ")}
    >
      <span className="text-lg" aria-hidden>{theme === "dark" ? "🌙" : "🌞"}</span>
      <span className="hidden sm:inline">{theme === "dark" ? "Ciemny" : "Jasny"}</span>
    </button>
  );
}

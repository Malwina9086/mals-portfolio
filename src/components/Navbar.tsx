// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n";

/** Linki w menu */
type NavItem = { to: string; key?: string; label?: string };
const NAV: NavItem[] = [
  { to: "/", key: "nav.home" },
  { to: "/work", key: "nav.work" },
  { to: "/contact", key: "nav.contact" },
  { to: "/resume", key: "nav.resume", label: "Resume" },
];

/** Klasy dla desktopowych linków */
function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "px-3 py-2 rounded-xl transition-colors text-sm md:text-base",
    "md:link-underline",
    isActive ? "font-semibold md:link-underline--active" : "hover:bg-zinc-100",
  ].join(" ");
}

/** Wspólna klasa „kafelków” */
const BTN_SQ =
  "inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition";

/** Ikony SVG */
function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.4-3.9-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.76.41-1.26.75-1.55-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4v16h-4V8ZM8 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C19.6 8 21 10.06 21 13.7V24h-4v-9c0-2.14-.76-3.6-2.66-3.6-1.45 0-2.31.98-2.69 1.93-.14.34-.17.82-.17 1.3V24H8V8Z" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useI18n();

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrolled, setScrolled] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // blokada scrolla
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // globalny dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // cień przy scrollu
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // obsługa Esc i focus trap
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!panelRef.current) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const toggleLang = () => setLang(lang === "pl" ? "en" : "pl");
  const onNavClick = () => setOpen(false);

  return (
    <>
      <nav
        className={[
          "fixed top-0 inset-x-0 h-16 md:h-20 z-[70]",
          "bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white",
          "border-b border-zinc-200 dark:border-zinc-700",
          scrolled ? "shadow-sm" : "",
        ].join(" ")}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
            <span className="font-bold text-lg md:text-xl">Mal&apos;s Portfolio</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
                {item.key ? t(item.key) : item.label}
              </NavLink>
            ))}

            <a
              href="https://github.com/Malwina9086"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_SQ}
              aria-label="GitHub"
              title="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </a>
            <a
              href="https://uk.linkedin.com/in/malwina-lukjanska-730605296/pl"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_SQ}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>

            {/* ⬇️ PRZEŁĄCZNIK MOTYWU (DESKTOP) – tłumaczony */}
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className={BTN_SQ}
              aria-label={
                dark
                  ? lang === "pl" ? "Wyłącz tryb ciemny" : "Turn off dark mode"
                  : lang === "pl" ? "Włącz tryb ciemny" : "Turn on dark mode"
              }
              title={dark ? t("theme.light") : t("theme.dark")}
            >
              {dark ? "🌞" : "🌙"}
            </button>

            {/* Przycisk zmiany języka */}
            <button
              type="button"
              onClick={toggleLang}
              className={BTN_SQ + " font-medium"}
              aria-label={lang === "pl" ? "Switch language to English" : "Zmień język na polski"}
              title={lang === "pl" ? "Switch to English" : "Zmień na polski"}
            >
              {lang.toUpperCase()}
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-300 px-3 py-2 hover:bg-zinc-100"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg className={`h-5 w-5 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-5 w-5 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop mobile */}
      {open && (
        <button
          type="button"
          className="fixed inset-0 top-16 bg-black/55 backdrop-blur-sm md:hidden z-[60]"
          aria-label="Zamknij menu"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel mobilny */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={[
          "md:hidden fixed inset-x-0 top-16 z-[61]",
          "transform transition-transform duration-200",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-2xl p-2">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {NAV.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                ref={i === 0 ? firstLinkRef : undefined}
                className={({ isActive }) =>
                  [
                    "group block w-full px-4 py-3 rounded-xl transition-all duration-150",
                    "mobile-item",
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-700"
                      : "hover:bg-zinc-100 hover:pl-5 hover:shadow-sm dark:hover:bg-zinc-800",
                  ].join(" ")
                }
                onClick={onNavClick}
              >
                <span className="flex items-center justify-between">
                  <span>{item.key ? t(item.key) : item.label}</span>
                  <svg className="h-4 w-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </NavLink>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {/* ⬇️ PRZEŁĄCZNIK MOTYWU (MOBILE) – tłumaczony */}
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className="group w-full text-left px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              title={dark ? t("theme.light") : t("theme.dark")}
            >
              {dark ? `🌞 ${t("theme.light")}` : `🌙 ${t("theme.dark")}`}
            </button>

            {/* Zmiana języka */}
            <button
              type="button"
              onClick={toggleLang}
              className="group w-full text-left px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label={lang === "pl" ? "Switch language to English" : "Zmień język na polski"}
              title={lang === "pl" ? "Switch to English" : "Zmień na polski"}
            >
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href="https://github.com/Malwina9086"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_SQ}
              aria-label="GitHub"
              onClick={() => setOpen(false)}
            >
              <IconGitHub className="h-5 w-5" />
            </a>
            <a
              href="https://uk.linkedin.com/in/malwina-lukjanska-730605296/pl"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_SQ}
              aria-label="LinkedIn"
              onClick={() => setOpen(false)}
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

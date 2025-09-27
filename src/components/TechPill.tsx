// src/components/TechPill.tsx
import TechIcon from "./TechIcon";

/** lekka utilka do łączenia klas bez zewn. paczek */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Variant = "solid" | "outline";
type Size = "sm" | "md";

export default function TechPill({
  name,
  variant = "outline",
  active = false,
  size = "md",
  showIcon = true,
  className,
  children,
}: {
  name: string;
  variant?: Variant;
  active?: boolean;
  size?: Size;
  showIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const k = normalize(name);

  // spójna paleta kolorów + ring dla czytelności
  const palette: Record<
    string,
    { solid: string; outline: string; text: string; badge: string; ring: string }
  > = {
    html:      { solid: "bg-orange-500 text-white",               outline: "border-orange-400 text-orange-900 dark:text-orange-200",  text: "text-orange-900 dark:text-orange-200",  badge: "text-orange-600",  ring: "ring-orange-300/50" },
    css:       { solid: "bg-blue-500 text-white",                 outline: "border-blue-400 text-blue-900 dark:text-blue-200",        text: "text-blue-900 dark:text-blue-200",     badge: "text-blue-600",    ring: "ring-blue-300/50" },
    javascript:{ solid: "bg-yellow-400 text-black",               outline: "border-yellow-300 text-yellow-900 dark:text-yellow-200",  text: "text-yellow-900 dark:text-yellow-200", badge: "text-yellow-500",  ring: "ring-yellow-300/50" },
    typescript:{ solid: "bg-sky-600 text-white",                  outline: "border-sky-400 text-sky-900 dark:text-sky-200",           text: "text-sky-900 dark:text-sky-200",       badge: "text-sky-600",     ring: "ring-sky-300/50" },
    react:     { solid: "bg-cyan-500 text-black",                 outline: "border-cyan-400 text-cyan-900 dark:text-cyan-200",        text: "text-cyan-900 dark:text-cyan-200",     badge: "text-cyan-500",    ring: "ring-cyan-300/50" },
    "node.js": { solid: "bg-lime-600 text-white",                 outline: "border-lime-500 text-lime-900 dark:text-lime-200",        text: "text-lime-900 dark:text-lime-200",     badge: "text-lime-600",    ring: "ring-lime-300/50" },
    express:   { solid: "bg-zinc-900 text-white",                 outline: "border-zinc-400 text-zinc-900 dark:text-zinc-200",        text: "text-zinc-900 dark:text-zinc-200",     badge: "text-zinc-700",    ring: "ring-zinc-300/50" },
    mongodb:   { solid: "bg-emerald-600 text-white",              outline: "border-emerald-500 text-emerald-900 dark:text-emerald-200",text: "text-emerald-900 dark:text-emerald-200",badge: "text-emerald-600", ring: "ring-emerald-300/50" },
    tailwind:  { solid: "bg-teal-500 text-black",                 outline: "border-teal-400 text-teal-900 dark:text-teal-200",        text: "text-teal-900 dark:text-teal-200",     badge: "text-teal-500",    ring: "ring-teal-300/50" },
    vite:      { solid: "bg-indigo-600 text-white",               outline: "border-indigo-500 text-indigo-900 dark:text-indigo-200",  text: "text-indigo-900 dark:text-indigo-200", badge: "text-indigo-600",  ring: "ring-indigo-300/50" },
  };

  const colors =
    palette[k] ?? {
      solid: "bg-zinc-200 text-zinc-900",
      outline: "border-zinc-300 text-zinc-800 dark:text-zinc-200",
      text: "text-zinc-800 dark:text-zinc-200",
      badge: "text-zinc-500",
      ring: "ring-zinc-300/50",
    };

  const sizes = {
    sm: { wrap: "px-2.5 py-1 text-[13px] leading-none", iconWrap: "h-5 w-5", icon: "h-4 w-4",   gap: "gap-1.5" },
    md: { wrap: "px-3.5 py-1.5 text-sm  leading-none", iconWrap: "h-6 w-6", icon: "h-5 w-5",   gap: "gap-2"   },
  }[size];

  return (
    <span
      className={cx(
        "relative inline-flex items-center rounded-full font-semibold transition-all duration-200 pill-sheen hover:-translate-y-0.5",
        sizes.wrap,
        sizes.gap,
        variant === "solid"
          ? cx(colors.solid, "ring-1", colors.ring)
          : cx("border bg-white/60 dark:bg-white/5", colors.outline, active && "ring-2", colors.ring),
        className // <- użycie className naprawia warning lintera
      )}
      title={typeof name === "string" ? name : String(name)}
      role="note"
    >
      {showIcon && (
        <span
          className={cx(
            "inline-flex items-center justify-center rounded-full backdrop-blur-[1px] drop-shadow-sm",
            sizes.iconWrap,
            // SOLID: jasne tło pod ikoną; OUTLINE: dotychczasowe bg-current/30
            variant === "solid" ? "bg-white/30" : "bg-current/30",
            colors.badge
          )}
          aria-hidden
        >
          {/* SOLID: biała ikona dla maksymalnego kontrastu; OUTLINE: oryginalny kolor */}
          <TechIcon
            name={k}
            className={cx(sizes.icon, "drop-shadow", variant === "solid" && "text-white")}
          />
        </span>
      )}
      <span className={colors.text}>{children ?? name}</span>
    </span>
  );
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** proporcje kontenera, np. "aspect-[16/10]" (domyślnie 16/10) */
  aspectClassName?: string;
  /** ścieżka do małego podglądu (np. 24–40px szer.), użyta do efektu blur-up */
  placeholderSrc?: string;
};

export default function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  aspectClassName = "aspect-[16/10]",
  placeholderSrc,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectClassName} bg-zinc-100 ${className}`}>
      {/* BLUR-UP: jeśli mamy placeholderSrc, pokaż rozmyty podgląd pod spodem */}
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover scale-105 blur-xl"
        />
      ) : (
        // Fallback: shimmer gdy nie podasz placeholderSrc
        <div className="absolute inset-0 animate-shimmer rounded-t-2xl" />
      )}

      {/* Pełny obraz – wjeżdża z fade-in, wygasza „blur” lub shimmer */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

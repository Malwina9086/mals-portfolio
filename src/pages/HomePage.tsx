// src/pages/HomePage.tsx
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useReveal } from "../components/useReveal";
import TypingCodeWindow from "../components/TypingCodeWindow";


export default function HomePage() {
  useReveal();
  const { t } = useI18n();

  return (
    <section className="container mx-auto px-4 pt-24">
      {/* 1 kolumna do lg, od lg = 2; min-w-0 zapobiega rozpychaniu na bardzo wąskich ekranach */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start lg:items-center">
        {/* Lewa kolumna */}
        <div className="min-w-0">
          <div className="flex items-center gap-5 reveal">
            <img
              src="/assets/avatar1.jpg"
              alt="Malwina – avatar"
              className="h-28 w-28 md:h-36 md:w-36 object-cover rounded-full ring-4 ring-emerald-200 avatar-float avatar-glow transition-transform duration-300 hover:-rotate-2"
              loading="eager"
            />
            <div className="min-w-0">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight break-words">
                Malwina Lukjanska
              </h1>
              <p className="mt-1 font-medium text-emerald-700 dark:text-emerald-400">
                {t("home.subtitle")}
              </p>
            </div>
          </div>

<p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-prose reveal reveal-delay-1">
  {t("home.lead")}
</p>

          {/* OBA przyciski – jednakowe, zielone */}
          <div className="mt-6 flex flex-wrap gap-3 reveal reveal-delay-2">
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition"
            >
              {t("home.cta.work")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition"
            >
              {t("home.cta.contact")}
            </Link>
          </div>
        </div>

        {/* Prawa kolumna: okienko kodu — lekko opuszczone na desktopie */}
        <div className="min-w-0 reveal reveal-delay-2 lg:translate-y-3 xl:translate-y-6">
          {/* w-full + overflow-hidden, by NIE rozpychać layoutu na wąskich ekranach */}
          <div className="w-full max-w-[560px] mx-auto lg:mx-0 rounded-2xl overflow-hidden code-window-glow">
            <TypingCodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}

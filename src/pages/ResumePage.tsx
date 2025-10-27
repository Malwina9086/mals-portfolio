import { useReveal } from "../components/useReveal";
import { useI18n } from "../i18n";
import { resumeContent } from "../data/resume";
import TechPill from "../components/TechPill";

export default function ResumePage() {
  useReveal();
  const { t, lang } = useI18n();
  const c = resumeContent[lang];

  const cvHref =
    lang === "pl"
      ? "/assets/cv/Malwina_Lukjanska_CV_PL.pdf"
      : "/assets/cv/Malwina_Lukjanska_CV_EN.pdf";

  return (
    <section className="container mx-auto px-6 py-24 flex flex-col items-center">
      <header className="mb-8 text-center reveal">
        <h1 className="text-3xl md:text-4xl font-semibold">{t("resume.title")}</h1>
        <p className="text-muted-foreground mt-2">{t("resume.subtitle")}</p>
      </header>

      <div className="reveal reveal-delay-1 w-full max-w-3xl">
        <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-8 shadow-md space-y-10">
          {/* Podsumowanie */}
          <section>
            <h2 className="text-xl font-semibold mb-3">{t("resume.summary")}</h2>
            <p className="text-muted-foreground">{c.summary}</p>
          </section>

          {/* Umiejętności */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t("resume.skills")}</h2>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <TechPill key={s} name={s} variant="outline" size="sm" showIcon={false} />
              ))}
            </div>
          </section>

          {/* Doświadczenie */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t("resume.experience")}</h2>
            <div className="space-y-5">
              {c.experience.map((e) => (
                <div key={e.role + e.period} className="rounded-xl border p-4 bg-white/60 dark:bg-white/5">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-medium">{e.role}</h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projekty */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t("resume.projects")}</h2>
            <div className="space-y-5">
              {c.projects.map((p) => (
                <div key={p.name} className="rounded-xl border p-4 bg-white/60 dark:bg-white/5">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-medium">{p.name}</h3>
                    <span className="text-sm text-muted-foreground">{p.tech}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Edukacja */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t("resume.education")}</h2>
            <ul className="space-y-3">
              {c.education.map((ed) => (
                <li key={ed.title + ed.period} className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span className="font-medium">{ed.title}</span>
                  <span className="text-sm text-muted-foreground">{ed.period}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Zainteresowania */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t("resume.interests")}</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {c.interests.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </section>

          {/* Pobierz CV */}
          <div className="flex justify-center pt-2">
            <a
              href={cvHref}
              download
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition shadow-sm hover:shadow"
            >
              {t("resume.download")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useReveal } from "../components/useReveal";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import TechPill from "../components/TechPill";
import { projects, type Project } from "../data/projects";

export default function WorkPage() {
  useReveal();
  const { t, lang } = useI18n(); // ⬅️ potrzebujemy lang

  const ALL_TAGS = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    []
  );

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const onSearchKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setQuery("");
      setActiveTag(null);
    }
  }, []);

  const onTagClick = useCallback((tag: string) => {
    setActiveTag((curr) => (curr === tag ? null : tag));
  }, []);

  const clearAll = useCallback(() => {
    setQuery("");
    setActiveTag(null);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return projects.filter((p) => {
      const haystack = `${p.title.pl} ${p.title.en} ${p.description.pl} ${p.description.en} ${p.tech.join(" ")}`.toLowerCase();
      const matchesQuery = q === "" || haystack.includes(q);
      const matchesTag = !activeTag || p.tech.some((t) => t.toLowerCase() === activeTag.toLowerCase());
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section className="container mx-auto px-6 py-24">
      <header className="mb-6 reveal">
        <h1 className="text-3xl md:text-4xl font-semibold">{t("work.title")}</h1>
      </header>

      {/* Filtry */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 reveal reveal-delay-1">
        <input
          value={query}
          onChange={onSearchChange}
          onKeyDown={onSearchKeyDown}
          placeholder={t("work.search.placeholder")}
          className="w-full md:w-80 rounded-xl border px-3 py-2"
          aria-label={t("work.search.placeholder")}
        />

        <div className="flex flex-wrap gap-2" aria-label="Filter by technology">
          {ALL_TAGS.map((tag) => {
            const checked = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                aria-pressed={checked}
                title={`Filter: ${tag}`}
                className="focus:outline-none"
              >
                <TechPill name={tag} variant="solid" active={checked} size="sm" showIcon />
              </button>
            );
          })}
        </div>

        {(query || activeTag) && (
          <button
            type="button"
            onClick={clearAll}
            className="md:ml-auto rounded-xl border px-3 py-1.5 text-sm hover:bg-muted"
            aria-label={t("work.clear")}
            title={t("work.clear")}
          >
            {t("work.clear")}
          </button>
        )}
      </div>

      {/* Licznik */}
      <div className="mb-6 text-sm text-muted-foreground">
        {t("work.results")}: <span className="font-medium">{filtered.length}</span>
      </div>

      {/* Siatka projektów */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">{t("work.noResults")}</p>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p: Project) => {
            const primaryLink = p.demoUrl || p.repoUrl;
            const CardRoot: React.ElementType = primaryLink ? "a" : "div";
            const rootProps = primaryLink ? { href: primaryLink, target: "_blank", rel: "noreferrer" } : {};

            return (
              <CardRoot
                key={p.id}
                {...rootProps}
                className={[
                  "group block cursor-pointer",
                  "rounded-2xl border border-zinc-300 dark:border-zinc-700 overflow-hidden",
                  "bg-white dark:bg-zinc-900",
                  "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                ].join(" ")}
                aria-label={`${p.title[lang]} — open`}
              >
                {p.image ? (
                  <ImageWithPlaceholder
                    src={p.image}
                    placeholderSrc={p.placeholder}
                    alt={p.title[lang]}
                    className="rounded-t-2xl"
                    aspectClassName="aspect-[16/10]"
                  />
                ) : (
                  <div className="aspect-[16/10] bg-muted" />
                )}

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.description[lang]}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <TechPill key={t} name={t} variant="solid" size="md" showIcon />
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {p.demoUrl && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(p.demoUrl, "_blank", "noopener");
                        }}
                        className="inline-flex items-center justify-center rounded-xl px-3 py-2 bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition"
                      >
                        {t("work.demo")}
                      </button>
                    )}
                    {p.repoUrl && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(p.repoUrl, "_blank", "noopener");
                        }}
                        className="inline-flex items-center justify-center rounded-xl px-3 py-2 border hover:bg-muted active:scale-95 transition"
                      >
                        {t("work.repo")}
                      </button>
                    )}
                  </div>
                </div>
              </CardRoot>
            );
          })}
        </div>
      )}

      <div className="mt-10 text-center reveal reveal-delay-1">
        <p className="text-muted-foreground">
          {t("work.footer")}{" "}
          <Link to="/contact" className="text-emerald-600 hover:underline">
            {t("work.footer.cta")}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

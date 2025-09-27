import { useState } from "react";
import { useI18n } from "../i18n";
import { useReveal } from "../components/useReveal";
import { openMailto } from "../utils/mailto";

const EMAIL_TO = "twojemail@example.com"; // <- PODMIEŃ

type Errors = { name?: string; email?: string; message?: string };

export default function ContactPage() {
  useReveal();
  const { t } = useI18n();
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setOk(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const from = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Podaj co najmniej 2 znaki.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) next.email = "Podaj poprawny e-mail.";
    if (message.length < 10) next.message = "Napisz minimum 10 znaków.";

    if (Object.keys(next).length) {
      setErrors(next);
      setSending(false);
      return;
    }

    const subject = "Współpraca – portfolio";
    const body = `Cześć Malwina!

${message}

— ${name} (${from})`;

    openMailto(EMAIL_TO, subject, body);

    (e.currentTarget as HTMLFormElement).reset();
    setOk("Dziękuję! Otworzył się klient poczty z przygotowaną wiadomością 💌");
    setSending(false);
  };

  return (
    <section className="container mx-auto px-6 py-24 flex flex-col items-center">
      <header className="mb-8 text-center reveal">
        <h1 className="text-3xl md:text-4xl font-semibold">{t("contact.title")}</h1>
        <p className="text-muted-foreground mt-2">{t("contact.subtitle")}</p>
      </header>

      <div className="reveal reveal-delay-1 w-full max-w-2xl">
        <div className="rounded-2xl border border-zinc-400 dark:border-zinc-600 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-8 shadow-md">
          <h2 className="text-xl font-semibold text-center mb-6">Napisz wiadomość</h2>

          {ok && (
            <div className="mb-4 rounded-xl bg-green-50 text-green-800 px-4 py-2 border border-green-200 text-center">
              {ok}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Imię */}
            <div>
              <input
                id="name"
                name="name"
                required
                placeholder="Imię"
                className={[
                  "w-full rounded-xl border px-4 py-3",
                  "bg-white dark:bg-zinc-800",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400",
                  errors.name ? "border-red-500" : "border-zinc-400 dark:border-zinc-600",
                  "text-foreground",
                ].join(" ")}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* E-mail */}
            <div>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="E-mail"
                className={[
                  "w-full rounded-xl border px-4 py-3",
                  "bg-white dark:bg-zinc-800",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400",
                  errors.email ? "border-red-500" : "border-zinc-400 dark:border-zinc-600",
                  "text-foreground",
                ].join(" ")}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Wiadomość */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Wiadomość"
                className={[
                  "w-full rounded-xl border px-4 py-3",
                  "bg-white dark:bg-zinc-800",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400",
                  errors.message ? "border-red-500" : "border-zinc-400 dark:border-zinc-600",
                  "text-foreground",
                ].join(" ")}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Przycisk Wyślij */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={sending}
                className={[
                  "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium",
                  "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 disabled:opacity-50 transition",
                  "shadow-sm hover:shadow",
                ].join(" ")}
              >
                {sending ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-transparent animate-spin" />
                    Wysyłanie…
                  </span>
                ) : (
                  t("contact.send")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

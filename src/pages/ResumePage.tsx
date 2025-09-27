import { useReveal } from "../components/useReveal";

export default function ResumePage() {
  useReveal();

  return (
    <section className="container mx-auto px-6 py-24 flex flex-col items-center">
      <header className="mb-8 text-center reveal">
        <h1 className="text-3xl md:text-4xl font-semibold">Resume / CV</h1>
        <p className="text-muted-foreground mt-2">
          Poznaj moje doświadczenie, umiejętności i edukację
        </p>
      </header>

      <div className="reveal reveal-delay-1 w-full max-w-2xl">
        <div className="rounded-2xl border border-zinc-400 dark:border-zinc-600 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-8 shadow-md space-y-8">
          {/* Umiejętności */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Umiejętności</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>HTML, CSS (TailwindCSS)</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>React, React Router</li>
              <li>Node.js (Express)</li>
              <li>Git, GitHub</li>
            </ul>
          </section>

          {/* Doświadczenie */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Doświadczenie</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Fullstack Developer (Freelance)</h3>
                <p className="text-sm text-muted-foreground">2023 – obecnie</p>
                <p className="mt-1 text-muted-foreground">
                  Tworzenie responsywnych aplikacji webowych przy użyciu React, Node.js i TailwindCSS.
                </p>
              </div>
              <div>
                <h3 className="font-medium">[Twoje poprzednie doświadczenie]</h3>
                <p className="text-sm text-muted-foreground">Rok – Rok</p>
                <p className="mt-1 text-muted-foreground">
                  Krótki opis obowiązków i osiągnięć.
                </p>
              </div>
            </div>
          </section>

          {/* Edukacja */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Edukacja</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">[Nazwa szkoły / uczelni]</h3>
                <p className="text-sm text-muted-foreground">Rok – Rok</p>
                <p className="mt-1 text-muted-foreground">
                  Kierunek / specjalizacja.
                </p>
              </div>
            </div>
          </section>

          {/* Pobierz CV */}
          <div className="flex justify-center pt-4">
            <a
              href="/assets/Malwina_Lukjanska_CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition shadow-sm hover:shadow"
            >
              Pobierz CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

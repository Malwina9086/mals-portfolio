// src/i18n/dict.ts
export type Lang = "pl" | "en";

export const messages: Record<Lang, Record<string, string>> = {
  pl: {
    "nav.home": "Strona główna",
    "nav.work": "Moje prace",
    "nav.contact": "Kontakt",
    "nav.resume": "Resume",

    "home.subtitle": "Full-stack developerka — HTML • CSS • JavaScript • React • Node.js",
    "home.lead":
      "Buduję szybkie, responsywne aplikacje webowe — od pięknego frontendu po solidne API. Zobacz moje projekty lub napisz do mnie.",
    "home.cta.work": "Zobacz projekty",
    "home.cta.contact": "Skontaktuj się",

    "work.title": "Moje projekty",
    "work.search.placeholder": "Szukaj (np. React, panel, API…)",
    "work.demo": "Demo",
    "work.repo": "Repozytorium",
    "work.clear": "Wyczyść",
    "work.results": "Wyniki",
    "work.noResults": "Brak wyników dla wybranych filtrów.",
    "work.footer": "Masz pytania o projekty?",
    "work.footer.cta": "Napisz do mnie",

    "contact.title": "Kontakt",
    "contact.subtitle": "Masz pomysł lub projekt? Napisz — chętnie pomogę.",
    "contact.form.name": "Imię",
    "contact.form.email": "E-mail",
    "contact.form.message": "Wiadomość",
    "contact.form.submit": "Wyślij",
    "contact.send": "Wyślij",
    "contact.form.header": "Napisz wiadomość",
    "contact.error.name": "Podaj co najmniej 2 znaki.",
    "contact.error.email": "Podaj poprawny e-mail.",
    "contact.error.message": "Napisz minimum 10 znaków.",
    "contact.success": "Dziękuję! Otworzył się klient poczty z przygotowaną wiadomością 💌",

    "resume.title": "Resume / CV",
    "resume.subtitle": "Poznaj moje doświadczenie, umiejętności i edukację",
    "resume.skills": "Umiejętności",
    "resume.experience": "Doświadczenie",
    "resume.education": "Edukacja",
    "resume.download": "Pobierz CV (PDF)",
    "resume.summary": "Podsumowanie",
"resume.projects": "Projekty",
"resume.interests": "Zainteresowania",

    "theme.light": "Jasny",
    "theme.dark": "Ciemny",
  },

  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    "home.subtitle": "Full-stack developer — HTML • CSS • JavaScript — React — Node.js",
    "home.lead":
      "I build fast, responsive web apps — from beautiful front-ends to solid APIs. Check my projects or drop me a message.",
    "home.cta.work": "See projects",
    "home.cta.contact": "Contact me",

    "work.title": "My projects",
    "work.search.placeholder": "Search (e.g. React, dashboard, API…)",
    "work.demo": "Demo",
    "work.repo": "Repository",
    "work.clear": "Clear",
    "work.results": "Results",
    "work.noResults": "No results for selected filters.",
    "work.footer": "Questions about my projects?",
    "work.footer.cta": "Contact me",

    "contact.title": "Contact",
    "contact.subtitle": "Got an idea or a project? Reach out — I’d be happy to help.",
    "contact.form.name": "Name",
    "contact.form.email": "E-mail",
    "contact.form.message": "Message",
    "contact.form.submit": "Send",
    "contact.send": "Send",
    "contact.form.header": "Send a message",
    "contact.error.name": "Please enter at least 2 characters.",
    "contact.error.email": "Please enter a valid e-mail.",
    "contact.error.message": "Please write at least 10 characters.",
    "contact.success": "Thanks! Your e-mail client opened with a prefilled message 💌",

    "resume.title": "Resume / CV",
    "resume.subtitle": "Discover my experience, skills and education",
    "resume.skills": "Skills",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "resume.download": "Download CV (PDF)",
    "resume.summary": "Summary",
"resume.projects": "Projects",
"resume.interests": "Interests",

    "theme.light": "Light",
    "theme.dark": "Dark",
  },
};

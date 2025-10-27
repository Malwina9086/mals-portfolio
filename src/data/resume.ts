// src/data/resume.ts
import type { Lang } from "../i18n/dict";

export type ResumeBlock = {
  summary: string;
  skills: string[];
  experience: Array<{ role: string; period: string; desc: string }>;
  projects: Array<{ name: string; tech: string; desc: string }>;
  education: Array<{ title: string; period: string }>;
  interests: string[];
};

export const resumeContent: Record<Lang, ResumeBlock> = {
  pl: {
    summary:
      "Jestem ambitną Full Stack Developerką z umiejętnościami w HTML, CSS, JavaScript, React i Node.js. Obecnie poszerzam wiedzę o TypeScript i SQL. Do zespołu wnoszę dobrą komunikację, organizację pracy i nastawienie na współpracę.",
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
      "React", "Redux", "Node.js", "MongoDB",
      "REST API", "Webpack", "Parcel", "Handlebars", "Git", "GitHub", "SQL",
    ],
    experience: [
      {
        role: "Właścicielka działalności online (sprzedaż internetowa)",
        period: "10.2022 – obecnie",
        desc:
          "Prowadzenie sprzedaży online (obuwie i odzież): tworzenie i optymalizacja ofert, obsługa klienta, realizacja zamówień, zarządzanie stanem i wysyłkami, analiza rynku.",
      },
      {
        role: "Dietetyk i trener personalny",
        period: "2020 – 09.2023",
        desc:
          "Indywidualne plany treningowe i dietetyczne, zajęcia 1:1 i grupowe, monitorowanie postępów, wsparcie w osiąganiu celów.",
      },
    ],
    projects: [
      {
        name: "ICE CREAM PROJECT",
        tech: "HTML, SASS, Parcel",
        desc: "Grupowa strona do zamawiania naturalnych lodów — responsywność, animacje, optymalizacja.",
      },
      {
        name: "BOOKSHELF",
        tech: "HTML, SASS, JavaScript, Handlebars, REST API, Parcel",
        desc: "Aplikacja do przeglądania i zapisywania książek z zewnętrznego API; UI responsywny i dynamiczny.",
      },
      {
        name: "WEB SITE (projekt indywidualny)",
        tech: "HTML, SASS",
        desc: "Responsive layout, dbałość o dostępność, kontrola wersji na GitHub.",
      },
    ],
    education: [
      { title: "Full Stack Developer — GoIT Polska", period: "04.2023 – 03.2024" },
      { title: "TypeScript Developer — Udemy", period: "04.2024 – obecnie" },
      { title: "SQL — Udemy", period: "04.2024 – obecnie" },
      { title: "Diabetes Awareness — High Speed Training", period: "2020" },
      { title: "Fitness Nutrition — The Health Sciences Academy", period: "2019" },
      { title: "Personal Trainer — East Sussex College Group", period: "2019" },
    ],
    interests: [
      "Joga, pilates, wspinaczka bulderowa",
      "Rozwój osobisty, ekonomia, inwestowanie",
      "Równowaga praca-życie, nowe wyzwania",
    ],
  },

  en: {
    summary:
      "Motivated Full Stack Developer skilled in HTML, CSS, JavaScript, React and Node.js. Currently expanding knowledge in TypeScript and SQL. I bring strong communication, organisation and teamwork skills.",
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
      "React", "Redux", "Node.js", "MongoDB",
      "REST API", "Webpack", "Parcel", "Handlebars", "Git", "GitHub", "SQL",
    ],
    experience: [
      {
        role: "Online Sales Entrepreneur",
        period: "Oct 2022 – present",
        desc:
          "Independent online sales (footwear/apparel): listing optimisation, customer support, order fulfilment, stock & shipping, market analysis.",
      },
      {
        role: "Nutritionist & Personal Trainer",
        period: "2020 – Sep 2023",
        desc:
          "Tailored training and nutrition plans, 1:1 and group sessions, progress tracking and client support.",
      },
    ],
    projects: [
      {
        name: "ICE CREAM PROJECT",
        tech: "HTML, SASS, Parcel",
        desc: "Group website for ordering natural ice cream — responsive, animated, performance-minded.",
      },
      {
        name: "BOOKSHELF",
        tech: "HTML, SASS, JavaScript, Handlebars, REST API, Parcel",
        desc: "Web app to browse and manage books using a public API; responsive, dynamic UI.",
      },
      {
        name: "WEB SITE (individual project)",
        tech: "HTML, SASS",
        desc: "Responsive layout, accessibility focus, consistent Git version control.",
      },
    ],
    education: [
      { title: "Full Stack Developer — GoIT Poland", period: "Apr 2023 – Mar 2024" },
      { title: "TypeScript Developer — Udemy", period: "Apr 2025 – present" },
      { title: "SQL — Udemy", period: "Apr 2025 – present" },
      { title: "Diabetes Awareness — High Speed Training", period: "2020" },
      { title: "Fitness Nutrition — The Health Sciences Academy", period: "2019" },
      { title: "Personal Trainer — East Sussex College Group", period: "2019" },
    ],
    interests: [
      "Yoga, pilates, bouldering",
      "Personal growth, economics, investing",
      "Work–life balance, new challenges",
    ],
  },
};

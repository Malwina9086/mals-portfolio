import type { Lang } from "../i18n/dict";

export type Localized = Record<Lang, string>;

export type Project = {
  id: string;
  title: Localized;
  description: Localized;
  tech: string[];
  image?: string;
  placeholder?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ice-cream",
    title: { pl: "🍦 ICE CREAM PROJECT", en: "🍦 ICE CREAM PROJECT" },
    description: {
      pl: "Strona grupowa – sklep z lodami (responsive, animacje).",
      en: "Group project – an ice-cream shop site (responsive, animations).",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mariusz-72.github.io/ice-cream-project-group-07/",
    image: "/assets/projects/ice-cream.jpg",
    placeholder: "/assets/projects/ice-cream.blur.jpg",
  },
  {
    id: "bookshelf",
    title: { pl: "📚 BOOKSHELF", en: "📚 BOOKSHELF" },
    description: {
      pl: "Projekt grupowy – aplikacja do przeglądania książek.",
      en: "Group project – browse books with a clean UI.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://kglanos.github.io/goit-project-js/",
    image: "/assets/projects/bookshelf.jpg",
    placeholder: "/assets/projects/bookshelf.blur.jpg",
  },
  {
    id: "website",
    title: { pl: "🌐 WEB SITE (HTML + CSS)", en: "🌐 WEB SITE (HTML + CSS)" },
    description: {
      pl: "Indywidualny projekt: sekcje, nawigacja, layout RWD.",
      en: "Solo project: sections, navigation, responsive layout.",
    },
    tech: ["HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-markup-hw-08/",
    image: "/assets/projects/web-site.jpg",
    placeholder: "/assets/projects/web-site.blur.jpg",
  },
  {
    id: "cat-breeds",
    title: { pl: "🐱 CAT BREEDS SEARCH (JS)", en: "🐱 CAT BREEDS SEARCH (JS)" },
    description: {
      pl: "Wyszukiwarka ras kotów korzystająca z publicznego API.",
      en: "Cat breeds search powered by a public API.",
    },
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-js-hw-10/",
    image: "/assets/projects/cats.jpg",
    placeholder: "/assets/projects/cats.blur.jpg",
  },
  {
    id: "image-finder",
    title: { pl: "🖼 IMAGE FINDER (JS)", en: "🖼 IMAGE FINDER (JS)" },
    description: {
      pl: "Wyszukiwanie obrazów po słowach kluczowych.",
      en: "Find images by keywords.",
    },
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-js-hw-11/",
    image: "/assets/projects/image-finder.jpg",
    placeholder: "/assets/projects/image-finder.blur.jpg",
  },
];

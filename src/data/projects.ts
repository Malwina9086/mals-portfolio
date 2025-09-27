// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  placeholder?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ice-cream",
    title: "🍦 ICE CREAM PROJECT",
    description: "Strona grupowa – sklep z lodami (responsive, animacje).",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mariusz-72.github.io/ice-cream-project-group-07/",
    image: "/assets/projects/ice-cream.jpg",
    placeholder: "/assets/projects/ice-cream.blur.jpg",
  },
  {
    id: "bookshelf",
    title: "📚 BOOKSHELF",
    description: "Projekt grupowy – aplikacja do przeglądania książek.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://kglanos.github.io/goit-project-js/",
    image: "/assets/projects/bookshelf.jpg",
    placeholder: "/assets/projects/bookshelf.blur.jpg",
  },
  {
    id: "website",
    title: "🌐 WEB SITE (HTML + CSS)",
    description: "Indywidualny projekt: sekcje, nawigacja, layout RWD.",
    tech: ["HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-markup-hw-08/",
    image: "/assets/projects/web-site.jpg",
    placeholder: "/assets/projects/web-site.blur.jpg",
  },
  {
    id: "cat-breeds",
    title: "🐱 CAT BREEDS SEARCH (JS)",
    description: "Wyszukiwarka ras kotów korzystająca z publicznego API.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-js-hw-10/",
    image: "/assets/projects/cats.jpg",
    placeholder: "/assets/projects/cats.blur.jpg",
  },
  {
    id: "image-finder",
    title: "🖼 IMAGE FINDER (JS)",
    description: "Wyszukiwanie obrazów po słowach kluczowych.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demoUrl: "https://malwina9086.github.io/goit-js-hw-11/",
    image: "/assets/projects/image-finder.jpg",
    placeholder: "/assets/projects/image-finder.blur.jpg",
  },
];

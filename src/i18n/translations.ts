import type { Locale, Translations } from "./types";

const sharedLinks = {
  resume: "https://example.com/resume",
  github: "https://github.com/doulovera",
  linkedin: "https://linkedin.com/in/douglaslovera",
};

const en: Translations = {
  locale: "en",
  meta: {
    title: "Your Name - Portfolio",
    description: "Personal portfolio with experience and selected projects.",
  },
  nav: {
    main: "Main",
    experience: "Experience",
    projects: "Projects",
    moreProjects: "More",
    about: "About",
  },
  cta: {
    resume: "Resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    preview: "Preview",
  },
  links: sharedLinks,
  sectionTitles: {
    experience: "Experience",
    projects: "Featured Projects",
    moreProjects: "More Projects",
    about: "About Me",
  },
  main: {
    eyebrow: "Full-Stack Developer",
    name: "Your Full Name",
    description:
      "Write a short and clear description here. Keep it focused on your profile and what you build.",
    image: "/assets/douglas.webp",
    imageAlt: "Portrait of your name",
  },
  experience: [
    {
      company: "Company Name",
      role: "Role Title",
      time: "2024 - Present",
      description:
        "Write your responsibilities, impact, and technologies used. Keep this concise but specific.",
    },
    {
      company: "Previous Company",
      role: "Software Engineer",
      time: "2022 - 2024",
      description:
        "Describe your key work and results. Mention collaborations, scale, and product outcomes.",
    },
  ],
  featuredProjects: [
    {
      title: "Project One",
      description:
        "Short description of the project, problem solved, and what makes it relevant.",
      technologies: ["Astro", "TypeScript", "Tailwind"],
      image: "/assets/rhinolabs.jpg",
      imageAlt: "Project one preview",
      github: "https://github.com/your-user/project-one",
      preview: "https://project-one.example.com",
    },
    {
      title: "Project Two",
      description:
        "Add a second featured project here. You can remove preview or github links if unavailable.",
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      image: "/assets/dl.jpg",
      imageAlt: "Project two preview",
      github: "https://github.com/your-user/project-two",
    },
  ],
  moreProjects: [
    {
      title: "Project Three",
      technologies: ["React", "Vite", "Supabase"],
      github: "https://github.com/your-user/project-three",
      preview: "https://project-three.example.com",
    },
    {
      title: "Project Four",
      technologies: ["Go", "Redis", "REST"],
      github: "https://github.com/your-user/project-four",
    },
    {
      title: "Project Five",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      preview: "https://project-five.example.com",
    },
  ],
  about: {
    title: "About Me",
    paragraphs: [
      "Use this section for a more complete story: your background, approach, and the type of work you enjoy.",
      "You can include your values, technical focus, and how you collaborate with teams or clients.",
      "Replace this placeholder with your own voice and details.",
    ],
    image: "/assets/douglas-bg.jpg",
    imageAlt: "Second portrait of your name",
  },
  footerNote: "Built with Astro and Tailwind.",
};

const es: Translations = {
  locale: "es",
  meta: {
    title: "Tu Nombre - Portafolio",
    description: "Portafolio personal con experiencia y proyectos destacados.",
  },
  nav: {
    main: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    moreProjects: "Mas",
    about: "Sobre mi",
  },
  cta: {
    resume: "CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    preview: "Demo",
  },
  links: sharedLinks,
  sectionTitles: {
    experience: "Experiencia",
    projects: "Proyectos Destacados",
    moreProjects: "Mas Proyectos",
    about: "Sobre Mi",
  },
  main: {
    eyebrow: "Desarrollador Full-Stack",
    name: "Tu Nombre Completo",
    description:
      "Escribe aqui una descripcion corta y clara. Manten el enfoque en tu perfil y en lo que construyes.",
    image: "/assets/douglas.webp",
    imageAlt: "Retrato de tu nombre",
  },
  experience: [
    {
      company: "Nombre de Empresa",
      role: "Titulo del Rol",
      time: "2024 - Actualidad",
      description:
        "Escribe tus responsabilidades, impacto y tecnologias usadas. Mantenlo conciso pero especifico.",
    },
    {
      company: "Empresa Anterior",
      role: "Ingeniero de Software",
      time: "2022 - 2024",
      description:
        "Describe tu trabajo clave y resultados. Menciona colaboraciones, escala e impacto del producto.",
    },
  ],
  featuredProjects: [
    {
      title: "Proyecto Uno",
      description:
        "Descripcion breve del proyecto, problema resuelto y por que es relevante.",
      technologies: ["Astro", "TypeScript", "Tailwind"],
      image: "/assets/rhinolabs.jpg",
      imageAlt: "Vista previa del proyecto uno",
      github: "https://github.com/tu-usuario/proyecto-uno",
      preview: "https://proyecto-uno.example.com",
    },
    {
      title: "Proyecto Dos",
      description:
        "Agrega un segundo proyecto destacado aqui. Puedes quitar links si no tienes github o demo.",
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      image: "/assets/dl.jpg",
      imageAlt: "Vista previa del proyecto dos",
      github: "https://github.com/tu-usuario/proyecto-dos",
    },
  ],
  moreProjects: [
    {
      title: "Proyecto Tres",
      technologies: ["React", "Vite", "Supabase"],
      github: "https://github.com/tu-usuario/proyecto-tres",
      preview: "https://proyecto-tres.example.com",
    },
    {
      title: "Proyecto Cuatro",
      technologies: ["Go", "Redis", "REST"],
      github: "https://github.com/tu-usuario/proyecto-cuatro",
    },
    {
      title: "Proyecto Cinco",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      preview: "https://proyecto-cinco.example.com",
    },
  ],
  about: {
    title: "Sobre Mi",
    paragraphs: [
      "Usa esta seccion para una historia mas completa: tu contexto, tu enfoque y el tipo de trabajo que disfrutas.",
      "Puedes incluir tus valores, tu foco tecnico y como colaboras con equipos o clientes.",
      "Reemplaza este texto con tu voz y tus detalles reales.",
    ],
    image: "/assets/douglas-bg.jpg",
    imageAlt: "Segundo retrato de tu nombre",
  },
  footerNote: "Hecho con Astro y Tailwind.",
};

const translations: Record<Locale, Translations> = {
  en,
  es,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

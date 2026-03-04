import type { PortfolioData } from "./types";

export const portfolioDataEs: PortfolioData = {
  meta: {
    title: "Douglas Lovera - Desarrollador",
    description:
      "Desarrollador apasionado por la programacion y por mejorar vidas a traves de la tecnologia. Me gusta aprender cosas nuevas para mejorar mis habilidades y conocimientos"
  },
  navigation: [
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Sobre mi", href: "#about" }
  ],
  hero: {
    name: "Douglas Lovera",
    title: "Desarrollador Full Stack y Notion Campus Leader",
    description:
      "Me encanta crear cosas nuevas y ser parte del cambio contribuyendo a el. Apasionado por la programacion y el desarrollo.",
    portrait: "/assets/portrait.jpg",
    actions: [
      { label: "CV", href: "/resume" },
      { label: "GitHub", href: "https://github.com/doulovera" },
      { label: "LinkedIn", href: "https://linkedin.com/in/douglaslovera" }
    ]
  },
  experience: {
    title: "Experiencia",
    intro: "",
    items: [
      {
        company: "Rhinolabs",
        role: "Desarrollador Full Stack Semi Senior",
        period: "2021 - Presente",
        description:
          "He trabajado con diferentes clientes, ayudandolos en el desarrollo de sus productos. He trabajado con tecnologias como React, Node.js, Express, MongoDB y otras, tanto en frontend como en backend. Una de las empresas mas grandes con las que trabaje fue myaccident.org.\nCon MyAccident, trabaje en migraciones, refactorizacion, correccion de bugs y desarrollo de nuevas funcionalidades para cada flujo de la aplicacion y su equipo.\nTambien he ayudado en el desarrollo de nuevos productos para nuestros clientes."
      },
      {
        company: "Notion Peru",
        role: "Consultor de Notion",
        period: "2025 - Presente",
        description:
          "Como Consultor de Notion, ayudo a personas y empresas a optimizar sus flujos de trabajo y productividad usando Notion. Brindo servicios de consultoria personalizada, incluyendo configuracion de espacios de trabajo, creacion de plantillas y sesiones de capacitacion para que los clientes aprovechen al maximo las funciones de Notion. Trabajo de cerca con cada cliente para entender sus necesidades y objetivos, y adapto mis servicios para cubrirlos de manera efectiva."
      }
    ]
  },
  featuredProjects: {
    title: "Proyectos",
    intro: "",
    items: [
      {
        title: "schema.notion",
        description:
          "Crea y disena tus bases de datos de Notion visualmente y exportalas a tu espacio de trabajo con un solo clic. Relaciones, propiedades, rollups y asistencia con IA en una interfaz bonita e intuitiva.",
        technologies: ["Nextjs", "TypeScript", "Drizzle", "Notion API", "AI"],
        image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1772428282/portfolio_images/schema-notion_roybor.png",
        previewUrl: "https://schema.doulovera.com/"
      },
      {
        title: "QeepeR",
        description:
          "Genera codigos QR estaticos o dinamicos rapidamente, personaliza su diseno y actualiza sus destinos en cualquier momento.",
        technologies: ["Next.js", "Tailwind", "TypeScript", "Cloudflare Workers KV"],
        image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1743266796/portfolio_images/tkqtj6jyfg14ncqgewl9.png",
        githubUrl: "https://github.com/doulovera/qeeper",
        previewUrl: "https://qeeper.doulovera.com/"
      }
    ]
  },
  moreProjects: {
    title: "Mas proyectos",
    intro: "",
    items: [
      {
        title: "utilities",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/doulovera/utilities",
        previewUrl: "https://utilities.doulovera.com/"
      },
      {
        title: "schema.ai",
        technologies: ["Next.js", "TypeScript", "Tailwind", "AI"],
        githubUrl: "https://github.com/synapse-xyz/schema.ai",
        previewUrl: "https://schema-ai-wine.vercel.app/"
      },
      {
        title: "Bookmarker w/ Notion",
        technologies: ["Notion API", "JavaScript", "Browser"],
        githubUrl: "https://github.com/synapse-xyz/bookmarker-extension"
      }
    ]
  },
  about: {
    title: "Sobre mi",
    description:
      "Mi nombre es Douglas Lovera...\n\nTrabajo profesionalmente en programacion desde 2021, pero mi pasion comenzo cuando tenia 14 anos, creando bots de Discord y sitios web para mis amigos y para mi.\n\nMi motivacion es crear productos que generen valor y mantenerme al dia con el avance de nuevas tecnologias. Disfruto contribuir a proyectos que mejoran la vida de las personas.\n\nEn cuanto a mis intereses personales y profesionales, leo libros de distintos temas; mi autor favorito es Julio Ramon Ribeyro. Tambien me gusta asistir a eventos culturales y tecnologicos en mi ciudad. Profesionalmente, dedico gran parte de mi dia a integrar y mejorar funcionalidades en el trabajo y a desarrollar mis proyectos personales.",
    portrait: "/assets/about-portrait.webp"
  },
  footer: {
    heading: "Abierto a colaboraciones seleccionadas.",
    note: "Disponible para colaboraciones seleccionadas y roles in-house.",
    actions: [
      { label: "CV", href: "/resume" },
      { label: "GitHub", href: "https://github.com/doulovera" },
      { label: "LinkedIn", href: "https://linkedin.com/in/douglaslovera" }
    ]
  },
  redirects: [
    { slug: "instagram", to: "https://instagram.com/doulovera" },
    { slug: "github", to: "https://github.com/doulovera" },
    {
      slug: "resume",
      to: "https://drive.google.com/file/d/1iiSZcfrbAfsxVZQRz7VAvkya2BZGpA1q/view"
    },
    { slug: "linkedin", to: "https://linkedin.com/in/douglaslovera" }
  ]
};

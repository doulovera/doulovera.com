export type SupportedLocale = "en" | "es";

export const portfolioTexts = {
  en: {
    meta: {
      title: "Douglas Lovera - Developer",
      description:
        "Developer passionate about programming and improving lives through technology. I like learning new things that can help me to improve my skills and knowledge"
    },
    navigation: {
      experience: "Experience",
      projects: "Projects",
      about: "About"
    },
    hero: {
      title: "Full Stack Developer & Notion Campus Leader",
      description:
        "I love creating new things and be part of the change contributing to it. Passionate to programming and development.",
      actions: {
        resume: "Resume",
        github: "GitHub",
        linkedin: "LinkedIn"
      }
    },
    experience: {
      title: "Experience",
      intro: "",
      items: {
        rhinolabs: {
          role: "Mid-level Full Stack Developer",
          period: "2021 - Present",
          description:
            "I've work with different clients, helping them with the development of their products. I've worked with different technologies like React, Node.js, Express, MongoDB, and others, both in the frontend and backend. One of the biggest companies I've worked with is myaccident.org.\nWith MyAccident, I worked on migrating, refactoring, fixing bugs and adding new features for every workflow of the app and its team\nAlso, I've helped with the development of the new product for our clients."
        },
        notion: {
          role: "Notion Consultant",
          period: "2025 - Present",
          description:
            "As a Notion Consultant, I help individuals and businesses to optimize their workflows and productivity using Notion. I provide personalized consulting services, including workspace setup, template creation, and training sessions to help clients get the most out of Notion's features. I work closely with clients to understand their unique needs and goals, and I tailor my consulting services to meet those needs effectively."
        }
      }
    },
    featuredProjects: {
      title: "Projects",
      intro: "",
      items: {
        schemaNotion: {
          title: "schema.notion",
          description:
            "Create and design your Notion DBs visually and export them to your Notion workspace with a single click. Relations, properties, rollups, all with a beautiful and intuitive interface and AI assistance."
        },
        qeeper: {
          title: "QeepeR",
          description:
            "Quickly generate static or dynamic QR codes, personalize their design, and update their destinations at any time."
        }
      }
    },
    moreProjects: {
      title: "More Projects",
      intro: "",
      items: {
        utilities: "utilities",
        schemaAi: "schema.ai",
        bookmarker: "Bookmarker w/ Notion"
      }
    },
    about: {
      title: "About Me",
      description:
        "👋 My name is Douglas Lovera...\n\nI've been working professionally in programming since 2021, but my passion began when I was 14 years old, creating Discord bots and websites for my friends and myself.\n\nMy motivation is to create products that creates value and keep up with the advancement of new technologies. I enjoy contributing to projects that improve people's lives.\n\nRegarding my personal and professional interests, I read books on various topics; my favorite author is Julio Ramon Ribeyro. I also like to attend cultural and tech events in my city. Professionally, I spend a significant part of my day integrating and improving features at work and developing my personal projects."
    },
    footer: {
      heading: "Open for selected collaborations.",
      note: "Available for selected collaborations and in-house roles."
    }
  },
  es: {
    meta: {
      title: "Douglas Lovera - Desarrollador",
      description:
        "Desarrollador apasionado por la programación y por mejorar vidas a traves de la tecnología. Me gusta aprender cosas nuevas para mejorar mis habilidades y conocimientos"
    },
    navigation: {
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mi"
    },
    hero: {
      title: "Desarrollador Full Stack y Notion Campus Leader",
      description:
        "Me encanta crear cosas nuevas y ser parte del cambio contribuyendo a él. Apasionado por la programación y el desarrollo.",
      actions: {
        resume: "Mi CV",
        github: "GitHub",
        linkedin: "LinkedIn"
      }
    },
    experience: {
      title: "Experiencia",
      intro: "",
      items: {
        rhinolabs: {
          role: "Desarrollador Full Stack Semi Senior",
          period: "2021 - Presente",
          description:
            "He trabajado con diferentes clientes, ayudándolos en el desarrollo de sus productos. He trabajado con tecnologías como React, Node.js, Express, MongoDB y otras, tanto en frontend como en backend. Una de las empresas mas grandes con las que he trabajado es MyAccident.org.\nCon MyAccident, trabajé en migraciones, refactorización, corrección de bugs y desarrollo de nuevas funcionalidades para cada flujo de la aplicación y su equipo.\nTambién he ayudado en el desarrollo de nuevos productos para nuestros clientes."
        },
        notion: {
          role: "Consultor de Notion",
          period: "2025 - Presente",
          description:
            "Como Consultor de Notion, ayudo a personas y empresas a optimizar sus flujos de trabajo y productividad usando Notion. Brindo servicios de consultoría personalizada, incluyendo configuración de espacios de trabajo, creación de plantillas y sesiones de capacitación para que los clientes aprovechen al máximo las funciones de Notion. Trabajo de cerca con cada cliente para entender sus necesidades y objetivos, y adapto mis servicios para cubrirlos de manera efectiva."
        }
      }
    },
    featuredProjects: {
      title: "Proyectos",
      intro: "",
      items: {
        schemaNotion: {
          title: "schema.notion",
          description:
            "Crea y diseña tus bases de datos de Notion visualmente y expórtalas a tu espacio de trabajo con un solo clic. Relaciones, propiedades, rollups y asistencia con IA en una interfaz bonita e intuitiva."
        },
        qeeper: {
          title: "QeepeR",
          description:
            "Genera códigos QR estáticos o dinámicos rápidamente, personaliza su diseño y actualiza sus destinos en cualquier momento."
        }
      }
    },
    moreProjects: {
      title: "Más proyectos",
      intro: "",
      items: {
        utilities: "utilities",
        schemaAi: "schema.ai",
        bookmarker: "Bookmarker w/ Notion"
      }
    },
    about: {
      title: "Sobre mi",
      description:
        "Mi nombre es Douglas Lovera...\n\nTrabajo profesionalmente en programación desde 2021, pero mi pasión comenzó cuando tenía 14 años, creando bots de Discord y sitios web para mis amigos y para mí.\n\nMi motivación es crear productos que generen valor y mantenerme al día con el avance de nuevas tecnologías. Disfruto contribuir a proyectos que mejoran la vida de las personas.\n\nEn cuanto a mis intereses personales y profesionales, leo libros de distintos temas; mi autor favorito es Julio Ramón Ribeyro. También me gusta asistir a eventos culturales y tecnológicos en mi ciudad. Profesionalmente, dedico gran parte de mi día a integrar y mejorar funcionalidades en el trabajo y a desarrollar mis proyectos personales."
    },
    footer: {
      heading: "Abierto a colaboraciones seleccionadas.",
      note: "Disponible para colaboraciones seleccionadas y roles in-house."
    }
  }
} as const;

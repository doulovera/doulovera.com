const TECHNOLOGIES = {
  languages: {
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
  },
  frameworks: {
    react: "React",
    next: "Next.js",
    vue: "Vue.js",
    astro: "Astro",
  },
  css: {
    tailwind: "Tailwind",
    bootstrap: "Bootstrap",
  },
  services: {
    twilio: "Twilio",
    textmagic: "TextMagic",
    cf_workers: "Cloudflare Workers"
  },
  ai: {
    gemini: "Gemini",
  }
}

export const projects = [
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1743266796/portfolio_images/tkqtj6jyfg14ncqgewl9.png",
    title: "QeepeR",
    description:
      "Quickly generate static or dynamic QR codes, personalize their design, and update their destinations at any time.",
    repository: "https://github.com/doulovera/qeeper",
    demo: "https://qeeper.doulovera.com/",
    technologies: [
      TECHNOLOGIES.languages.typescript,
      TECHNOLOGIES.frameworks.react,
      TECHNOLOGIES.frameworks.next,
      TECHNOLOGIES.css.tailwind,
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1659116121/portfolio_images/msedge_7XfaNqGY5x_d42o0a.png",
    title: "Chat-App",
    description:
      "Chat app built for a hackathon where we need to use the Twilio Conversations API. You can create or join multiple rooms with many participants",
    repository: "https://github.com/doulovera/chat-app",
    demo: "https://chat-app-2022.vercel.app/",
    technologies: [
      TECHNOLOGIES.languages.typescript,
      TECHNOLOGIES.frameworks.react,
      TECHNOLOGIES.frameworks.next,
      TECHNOLOGIES.css.tailwind,
      TECHNOLOGIES.services.twilio,
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/im-a-gen_compress_oyv10s.jpg",
    title: "Im-a-gen",
    description:
      "App for generate images with different sizes, blur, and grayscale from Unsplash. Consuming the Lorem Picsum API to get these images ",
    repository: "https://github.com/doulovera/im-a-gen",
    demo: "https://im-a-gen.netlify.app/",
    technologies: [TECHNOLOGIES.languages.typescript, TECHNOLOGIES.frameworks.react],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/oneone-web_compress_i4z5e9.jpg",
    title: "One-One Discord Bot",
    repository: "https://github.com/doulovera/oneone-web",
    demo: "https://oneone.netlify.app/",
    technologies: [TECHNOLOGIES.languages.javascript],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/numrify_compress_kmtac9.jpg",
    title: "Numrify",
    repository: "https://github.com/doulovera/im-a-gen",
    demo: "https://numrify.netlify.app/",
    technologies: [TECHNOLOGIES.languages.javascript, TECHNOLOGIES.frameworks.react],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/publifelix_compress_obhrik.jpg",
    title: "Publifelix",
    repository: "https://github.com/doulovera/publifelix-demo",
    demo: "https://publifelix-demo.netlify.app/",
    technologies: [TECHNOLOGIES.css.bootstrap, TECHNOLOGIES.languages.javascript],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/todo-app_compress_mbyxiu.jpg",
    title: "ToDo App",
    repository: "https://github.com/doulovera/todo-app_react",
    demo: "https://dl-note-taker.vercel.app/",
    technologies: [TECHNOLOGIES.languages.javascript, TECHNOLOGIES.frameworks.react],
  },
];

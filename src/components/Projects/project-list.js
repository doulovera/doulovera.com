const languages = {
  html: "HTML/CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  node: "Node.js",
};

const frameworks = {
  react: "React.js",
  next: "Next.js",
};

const css = {
  tailwind: "Tailwind",
  bootstrap: "Bootstrap",
};

const services = {
  twilio: "Twilio",
};

const ProjectList = [
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1659116121/portfolio_images/msedge_7XfaNqGY5x_d42o0a.png",
    title: "Chat-App",
    description:
      "Chat app built for a hackathon where we need to use the Twilio Conversations API. You can create or join multiple rooms with many participants and start chatting. Sign in with GitHub with Firebase Auth.",
    repository: "https://github.com/doulovera/chat-app",
    demo: "https://chat-app-2022.vercel.app/",
    technologies: [
      languages.html,
      languages.typescript,
      frameworks.react,
      frameworks.next,
      css.tailwind,
      services.twilio,
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/im-a-gen_compress_oyv10s.jpg",
    title: "Im-a-gen",
    description:
      "App for generate images with different sizes, blur, and grayscale from Unsplash. Consuming the Lorem Picsum API to get these images with the parameters that you want. Also the style was inspired in GetWaves.io",
    repository: "https://github.com/doulovera/im-a-gen",
    demo: "https://im-a-gen.netlify.app/",
    technologies: [languages.html, languages.typescript, frameworks.react],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/oneone-web_compress_i4z5e9.jpg",
    title: "One-One Discord Bot",
    repository: "https://github.com/doulovera/oneone-web",
    demo: "https://oneone.netlify.app/",
    technologies: [languages.html, languages.javascript],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/numrify_compress_kmtac9.jpg",
    title: "Numrify",
    repository: "https://github.com/doulovera/im-a-gen",
    demo: "https://numrify.netlify.app/",
    technologies: [languages.html, languages.javascript, frameworks.react],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/publifelix_compress_obhrik.jpg",
    title: "Publifelix",
    repository: "https://github.com/doulovera/publifelix-demo",
    demo: "https://publifelix-demo.netlify.app/",
    technologies: [languages.html, css.bootstrap, languages.javascript],
  },
  {
    image:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1645307597/portfolio_images/todo-app_compress_mbyxiu.jpg",
    title: "ToDo App",
    repository: "https://github.com/doulovera/todo-app_react",
    demo: "https://dl-note-taker.vercel.app/",
    technologies: [languages.html, languages.javascript, frameworks.react],
  },
];

export default ProjectList;

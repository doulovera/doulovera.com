/****** I'LL MAKE THIS WITH OOP SOON, I'M LEARNING IT :) ******/

import HTML from "./icons/langs/html.png";
import CSS from "./icons/langs/css.png";
import JS from "./icons/langs/js.png";
import REACT from "./icons/langs/react.png";
import TS from "./icons/langs/ts.png";
import BOOTSTRAP from "./icons/langs/bootstrap.png";

const html = {
  name: "HTML 5",
  url: HTML,
};
const css = {
  name: "CSS 3",
  url: CSS,
};
const js = {
  name: "JavaScript",
  url: JS,
};
const ts = {
  name: "TypeScript",
  url: TS,
};
const react = {
  name: "React",
  url: REACT,
};
const bootstrap = {
  name: "Bootstrap",
  url: BOOTSTRAP,
};

export const ProjectList = [
  {
    name: "Im-a-gen",
    preview:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1629578532/Portfolio%20images/imagen_wprul8.png",
    languages: [html, css, ts, react],
    demoUrl: "https://im-a-gen.netlify.app/",
    repoUrl: "https://github.com/doulovera/im-a-gen",
  },
  {
    name: "OneOne Discord Bot",
    preview:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1621379375/Portfolio%20images/oneone_preview_fvrqdd_1_aq8mcw.png",
    languages: [html, css, js],
    demoUrl: "https://oneonebot.ml/",
  },
  {
    name: "Publifelix",
    preview:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1621379376/Portfolio%20images/publifelix_dw5fbm_1_mafdyp.png",
    languages: [html, css, js, bootstrap],
    demoUrl: "https://publifelix-demo.netlify.app/",
    repoUrl: "https://github.com/doulovera/publifelix-demo",
  },
  {
    name: "Github Profile Finder",
    preview:
      "https://res.cloudinary.com/dyonw3lkf/image/upload/v1630099864/Portfolio%20images/gh-png_y6paiw.png",
    languages: [html, css, js],
    demoUrl: "https://gh-profile-finder.netlify.app/",
    repoUrl: "https://github.com/doulovera/github-profile-finder",
  },
];

export const SkillsList = [
  {
    name: "HTML5",
    background: "#f06529",
  },
  {
    name: "CSS3",
    background: "#2965f1",
  },
  {
    name: "Responsive",
    background: "#FF69B4",
  },
  {
    name: "JavaScript",
    background: "#F0DB4F",
    color: "#323330",
  },
  {
    name: "TypeScript",
    background: "#007acc",
  },
  {
    name: "React.js",
    background: "#61DBFB",
    color: "#1F232A",
  },
  {
    name: "Next.js",
    background: "#000",
    color: "#fff"
  },
  {
    name: "Git/Github",
    background: "#f34f29",
  },
  {
    name: "Node.js",
    background: "#3C873A",
  },
];

import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectsContainer";
import { ProjectList, SkillsList } from "./assets/projectsAndSkills";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills skill={SkillsList} />
        <ProjectsContainer projectList={ProjectList} />
        <BlogPost />
      </main>
      <Footer />
    </>
  );
}

export default App;

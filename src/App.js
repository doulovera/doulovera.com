import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectsContainer";
import Certificates from "./components/Certificates";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

import { ProjectList, SkillsList } from "./assets/projectsAndSkills";
import CertificatesList from "./assets/certificates";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills skill={SkillsList} />
        <ProjectsContainer projectList={ProjectList} />
        <Certificates certificatesList={CertificatesList} />
        <BlogPost />
      </main>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectsContainer from './components/ProjectsContainer'
import Footer from './components/Footer'
import {ProjectList, SkillsList} from './assets/projectsAndSkills'

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills skill={SkillsList} />
        <ProjectsContainer projectList={ProjectList} />
      </main>
      <Footer />
    </>
  );
}

export default App;

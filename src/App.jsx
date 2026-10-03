import React, { useState } from 'react';
import './components/Header.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import {
  NAV_LINKS,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  STATS,
  SOCIALS,
} from './data/portfolio';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-shell">
      <Header navLinks={NAV_LINKS} activeSection={activeSection} />

      <main>
        <div id="home" onMouseEnter={() => setActiveSection('home')}>
          <Hero stats={STATS} socials={SOCIALS} />
        </div>
        <div id="about" onMouseEnter={() => setActiveSection('about')}>
          <About />
        </div>
        <div id="skills" onMouseEnter={() => setActiveSection('skills')}>
          <Skills skills={SKILLS} />
        </div>
        <div id="projects" onMouseEnter={() => setActiveSection('projects')}>
          <Projects projects={PROJECTS} />
        </div>
        <div id="experience" onMouseEnter={() => setActiveSection('experience')}>
          <Experience experience={EXPERIENCE} />
        </div>
        <div id="contact" onMouseEnter={() => setActiveSection('contact')}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

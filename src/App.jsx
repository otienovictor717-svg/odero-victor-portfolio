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
  return (
    <div className="app-shell">
      <Header navLinks={NAV_LINKS} />

      <main>
        <Hero stats={STATS} socials={SOCIALS} />
        <About />
        <Skills skills={SKILLS} />
        <Projects projects={PROJECTS} />
        <Experience experience={EXPERIENCE} />
        <Contact />
      </main>
    </div>
  );
}

export default App;

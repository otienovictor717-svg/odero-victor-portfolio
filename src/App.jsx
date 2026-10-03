import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Header.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

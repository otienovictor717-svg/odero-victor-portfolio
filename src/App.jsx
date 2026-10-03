import './components/Header.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'CSS',
  'UI/UX Design',
  'REST APIs',
  'Responsive Design',
  'Git & GitHub',
  'Performance Optimization',
];

const projects = [
  {
    title: 'Portfolio Revamp',
    type: 'Personal Brand',
    description:
      'Rebuilt a modern portfolio experience with a conversion-focused layout and premium visual storytelling.',
    stack: ['React', 'CSS', 'Vite'],
  },
  {
    title: 'TaskFlow Dashboard',
    type: 'Productivity App',
    description:
      'Designed a product dashboard to help teams organize work, track progress, and improve accountability.',
    stack: ['React', 'Node.js', 'API'],
  },
  {
    title: 'E-commerce Storefront',
    type: 'Retail Experience',
    description:
      'Created a polished storefront experience focused on usability, product discovery, and cleaner conversion paths.',
    stack: ['JavaScript', 'CSS', 'UX Design'],
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Independent / Freelance',
    period: '2023 — Present',
    points: [
      'Crafted responsive interfaces that blend visual design and performance thinking.',
      'Built scalable front-end systems with a focus on usability and maintainability.',
      'Worked closely with product goals to translate business needs into elegant UI solutions.',
    ],
  },
  {
    role: 'Product Designer / Developer',
    company: 'Creative Projects',
    period: '2021 — 2023',
    points: [
      'Designed and shipped polished digital experiences for personal and business brands.',
      'Improved interaction design, content structure, and visual consistency across projects.',
      'Bridged design and development to deliver faster, stronger product iterations.',
    ],
  },
];

const stats = [
  { value: '4+', label: 'Years building' },
  { value: '15+', label: 'Projects launched' },
  { value: '100%', label: 'Focus on quality' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/otienovictor717-svg' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:victor@example.com' },
];

function App() {
  return (
    <div className="app-shell">
      <Header navLinks={navLinks} />

      <main>
        <Hero stats={stats} socials={socials} />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact />
      </main>
    </div>
  );
}

export default App;

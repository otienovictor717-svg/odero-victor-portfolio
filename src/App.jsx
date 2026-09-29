import './components/Header.css';

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
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="#home">Victor.</a>
          </div>

          <nav className="nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Frontend Developer • UI Designer</p>
              <h1>
                I build clean, memorable digital experiences that help ideas stand out.
              </h1>
              <p className="lead">
                I&apos;m Victor Odero, a developer focused on turning product ideas into polished,
                responsive, and user-centered experiences.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#projects">
                  View Work
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="social-row" aria-label="Social profiles">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-card">
              <div className="badge">Available for work</div>
              <div className="profile-panel">
                <div className="avatar">VO</div>
                <div>
                  <h3>Victor Odero</h3>
                  <p>Product-focused frontend engineer</p>
                </div>
              </div>

              <div className="mini-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="mini-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section alt-section">
          <div className="container two-column">
            <div>
              <p className="section-tag">About</p>
              <h2>Design-driven thinking with engineering discipline.</h2>
            </div>

            <div>
              <p>
                I enjoy building interfaces that feel effortless: thoughtful layouts, strong visual
                hierarchy, and smooth interactions that help users understand the value of a product
                quickly.
              </p>
              <p>
                My work sits at the intersection of design and implementation, balancing aesthetics,
                performance, and usability to create experiences people actually enjoy using.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="section-tag">Skills</p>
            <h2>Tools and strengths I bring to product work.</h2>

            <div className="skill-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <div className="container">
            <p className="section-tag">Projects</p>
            <h2>Selected work that reflects my approach.</h2>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <p className="section-tag">Experience</p>
            <h2>Experience shaping digital products.</h2>

            <div className="experience-list">
              {experience.map((item) => (
                <article key={item.role} className="experience-item">
                  <div className="experience-head">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="section-tag">Contact</p>
              <h2>Let&apos;s build something memorable.</h2>
            </div>

            <a className="btn btn-primary" href="mailto:victor@example.com">
              victordeveloper@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

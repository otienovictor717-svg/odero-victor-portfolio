import React from 'react';
import { PROJECTS_DETAILED } from '../data/portfolio';

function Home() {
  const featured = PROJECTS_DETAILED.slice(0, 3);
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer • UI Designer</p>
            <h1>
              I build clean, memorable digital experiences that help ideas stand
              out.
            </h1>
            <p className="lead">
              I'm Victor Odero, a passionate frontend developer focused on turning
              product ideas into polished, responsive, and user-centered experiences.
              With over 4 years of experience, I've helped startups and businesses
              create beautiful digital products that users love.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/projects">
                View My Work
              </a>
              <a className="btn btn-secondary" href="/contact">
                Get In Touch
              </a>
            </div>

            <div className="social-row" aria-label="Social profiles">
              <a href="https://github.com/otienovictor717-svg" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:otienovictor717@gmail.com">Email</a>
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

      {/* Featured Projects */}
      <section className="section alt-section">
        <div className="container">
          <p className="section-tag">Featured Work</p>
          <h2>Projects that showcase my approach to design and development.</h2>

          <div className="project-grid">
            {featured.map((project) => (
              <article key={project.id} className="project-card">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="/projects" className="btn btn-primary">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container two-column">
          <div>
            <p className="section-tag">About Me</p>
            <h2>Design-driven thinking with engineering discipline.</h2>
          </div>

          <div>
            <p>
              I thrive at the intersection of design and development, creating interfaces
              that are not only beautiful but also highly functional and performant. My
              approach starts with understanding the user, their needs, and the business
              goals, then translating that into elegant solutions.
            </p>
            <p>
              I'm passionate about clean code, responsive design, and creating accessible
              web experiences. When I'm not coding, you'll find me contributing to open
              source or writing about web development.
            </p>
            <p>
              <a href="/resume">View my full resume →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

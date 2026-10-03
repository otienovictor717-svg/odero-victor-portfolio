import React from 'react';
import { PROJECTS_DETAILED } from '../data/portfolio';

function Home() {
  const featured = PROJECTS_DETAILED.slice(0, 3);
  const stats = [
    { value: '4+', label: 'Years Building' },
    { value: '20+', label: 'Projects Shipped' },
    { value: '100%', label: 'Client Happiness' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer • UI Designer</p>
            <h1>
              I craft digital experiences that users actually love.
            </h1>
            <p className="lead">
              I'm Victor Odero, a frontend developer obsessed with creating beautiful,
              performant web applications. With over 4 years of experience, I've helped
              startups and growing companies transform their ideas into polished digital
              products that drive real business results. I believe great design meets great
              engineering.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/projects">
                See My Work
              </a>
              <a className="btn btn-secondary" href="/contact">
                Start a Project
              </a>
            </div>

            <div className="social-row" aria-label="Social profiles">
              <a href="https://github.com/otienovictor717-svg" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:otienovictor717@gmail.com">Email Me</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="badge">Available for Projects</div>
            <div className="profile-panel">
              <div className="avatar">VO</div>
              <div>
                <h3>Victor Odero</h3>
                <p>Product-focused Frontend Engineer</p>
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
          <h2>Projects that shaped how I approach product development.</h2>

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
                      See Code →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="/projects" className="btn btn-primary">
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container two-column">
          <div>
            <p className="section-tag">About</p>
            <h2>Design thinking meets solid engineering.</h2>
          </div>

          <div>
            <p>
              I believe the best products come from combining thoughtful design with
              strong technical execution. My approach starts with understanding the user,
              their pain points, and the business objectives. Then I translate that into
              interfaces that are not only beautiful but highly functional and performant.
            </p>
            <p>
              I'm passionate about clean code, responsive design, accessibility, and
              creating experiences that make people's lives easier. I stay current with
              web technologies and best practices because I believe continuous learning
              is essential in this field.
            </p>
            <p>
              <a href="/resume" style={{ fontWeight: '600' }}>Check my full resume →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

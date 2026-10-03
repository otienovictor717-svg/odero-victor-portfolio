import React from 'react';
import { PROJECTS_DETAILED } from '../data/portfolio';

function Projects() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Portfolio</p>
          <h1>Selected Projects</h1>
          <p className="lead">
            Here are some of my recent projects showcasing my skills in frontend
            development, UI design, and full-stack web development.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="project-grid">
            {PROJECTS_DETAILED.map((project) => (
              <article key={project.id} className="project-card-detailed">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.fullDescription && (
                  <p className="project-full-desc">{project.fullDescription}</p>
                )}

                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">
                      View Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn">
                      GitHub →
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a href={project.caseStudyUrl} className="link-btn">
                      Case Study →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

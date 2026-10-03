function Projects({ projects }) {
  return (
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
  );
}

export default Projects;

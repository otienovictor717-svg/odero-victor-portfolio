function Experience({ experience }) {
  return (
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
  );
}

export default Experience;

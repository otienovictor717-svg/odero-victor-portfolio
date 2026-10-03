function Skills({ skills }) {
  return (
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
  );
}

export default Skills;

import React from 'react';

function Resume() {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'CSS/SCSS',
    'UI/UX Design',
    'REST APIs',
    'Responsive Design',
    'Git & GitHub',
    'Performance Optimization',
    'Figma',
    'Web Accessibility',
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

  const education = [
    {
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      school: 'University Name',
      year: '2020',
    },
  ];

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Professional</p>
          <h1>Resume</h1>
          <div className="resume-actions">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container resume-container">
          {/* Experience */}
          <div className="resume-section">
            <h2>Experience</h2>
            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.role} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                    <span className="period">{exp.period}</span>
                    <ul>
                      {exp.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.degree} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <p className="school">{edu.school}</p>
                    <span className="field">{edu.field}</span>
                    <span className="year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-grid-resume">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;

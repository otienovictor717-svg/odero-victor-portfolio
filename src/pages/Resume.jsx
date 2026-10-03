import React from 'react';

function Resume() {
  const skills = [
    'React',
    'React Router',
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js',
    'CSS/SCSS',
    'Responsive Design',
    'UI/UX Design',
    'REST APIs',
    'Git & GitHub',
    'Figma',
    'Web Accessibility (WCAG)',
    'Performance Optimization',
    'Webpack & Vite',
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Independent / Freelance',
      period: '2023 — Present',
      points: [
        'Developed and deployed 10+ client projects using React and modern JavaScript',
        'Built responsive, accessible web interfaces that improved user engagement by up to 40%',
        'Optimized website performance, achieving 95+ Lighthouse scores',
        'Collaborated with designers and product managers to translate requirements into elegant solutions',
      ],
    },
    {
      role: 'Product Designer & Developer',
      company: 'Creative Projects',
      period: '2021 — 2023',
      points: [
        'Designed and developed digital products for startups and small businesses',
        'Led UX research and usability testing to inform design decisions',
        'Built high-performance, mobile-first web applications',
        'Managed end-to-end product development from concept to launch',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Various Clients',
      period: '2020 — 2021',
      points: [
        'Created responsive websites and web applications for diverse clients',
        'Implemented modern web standards and best practices',
        'Debugged and optimized existing codebases',
        'Provided technical support and maintenance for deployed projects',
      ],
    },
  ];

  const education = [
    {
      degree: 'Self-Taught Developer',
      field: 'Full-Stack Web Development',
      school: 'Online Learning & Open Source Contribution',
      year: '2020 — Present',
    },
  ];

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Professional</p>
          <h1>Resume & CV</h1>
          <p className="lead">
            A comprehensive overview of my professional experience, skills, and education.
          </p>
          <div className="resume-actions">
            <button
              className="btn btn-primary"
              onClick={() => window.print()}
              style={{ marginTop: '20px' }}
            >
              Print / Save as PDF
            </button>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container resume-container">
          {/* Professional Summary */}
          <div className="resume-section">
            <h2>Professional Summary</h2>
            <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
              Passionate frontend developer and UI designer with 4+ years of experience
              building high-quality web applications. Specialized in React, modern JavaScript,
              and responsive design. Dedicated to creating user-centered experiences that
              blend beautiful design with solid engineering. Committed to continuous learning
              and staying current with web development best practices.
            </p>
          </div>

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
            <h2>Education & Learning</h2>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.degree} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <p className="school">{edu.school}</p>
                    <span className="field">{edu.field}</span>
                    <span className="year" style={{ display: 'block', marginTop: '4px' }}>
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid-resume">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="resume-section">
            <h2>Soft Skills</h2>
            <div className="skills-grid-resume">
              {['Communication', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Quick Learner', 'Attention to Detail'].map((skill) => (
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

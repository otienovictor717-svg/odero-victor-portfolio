import React from 'react';

function Resume() {
  const skills = [
    'React & React Router',
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js & Express',
    'CSS3 & SCSS',
    'Responsive Design',
    'UI/UX Design',
    'REST APIs',
    'Git & GitHub',
    'Figma & Design Tools',
    'Web Accessibility (WCAG)',
    'Performance Optimization',
    'Vite & Webpack',
    'Database Design (SQL/NoSQL)',
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Independent / Freelance',
      period: '2023 — Present',
      points: [
        'Developed and deployed 15+ client projects using React, Vue, and vanilla JavaScript',
        'Built responsive, accessible web interfaces resulting in average 35% improvement in user engagement',
        'Achieved 95+ Lighthouse performance scores through optimization and best practices',
        'Collaborated with designers and product managers to translate requirements into pixel-perfect solutions',
        'Maintained and enhanced legacy codebases, improving performance and code quality',
      ],
    },
    {
      role: 'Product Designer & Developer',
      company: 'Creative Digital Studio',
      period: '2021 — 2023',
      points: [
        'Led end-to-end design and development of 10+ digital products for startups and SMBs',
        'Conducted UX research and usability testing, informing design decisions that improved user satisfaction by 40%',
        'Built high-performance, mobile-first web applications using modern JavaScript frameworks',
        'Managed product development from concept to launch, working closely with stakeholders',
        'Designed and prototyped interfaces in Figma, ensuring design consistency and accessibility',
      ],
    },
    {
      role: 'Junior Web Developer',
      company: 'Web Solutions Agency',
      period: '2020 — 2021',
      points: [
        'Created responsive websites and web applications for diverse clients and industries',
        'Implemented modern web standards and best practices (HTML5, CSS3, JavaScript)',
        'Debugged and optimized existing codebases, reducing load times by up to 30%',
        'Provided technical support and maintenance for deployed projects',
        'Collaborated with cross-functional teams to deliver high-quality web solutions',
      ],
    },
  ];

  const education = [
    {
      degree: 'Self-Taught Full-Stack Developer',
      field: 'Web Development & Modern JavaScript',
      school: 'Online Learning Platforms & Open Source Contribution',
      year: '2020 — Present',
    },
    {
      degree: 'Web Development Bootcamp',
      field: 'Full-Stack Web Development',
      school: 'Intensive Online Program',
      year: '2019 — 2020',
    },
  ];

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Professional</p>
          <h1>Resume & Experience</h1>
          <p className="lead">
            A comprehensive overview of my professional background, technical skills, and experience.
          </p>
          <div className="resume-actions">
            <button
              className="btn btn-primary"
              onClick={() => window.print()}
              style={{ marginTop: '20px' }}
            >
              Download as PDF
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
              Passionate and results-driven Frontend Developer with 4+ years of experience
              building high-quality web applications and digital products. Specialized in React,
              modern JavaScript, responsive design, and UX-focused development. Known for
              bridging the gap between design and engineering to create beautiful, performant
              applications that users love. Committed to continuous learning, clean code
              practices, and delivering exceptional results. Proven track record of improving
              user engagement and performance metrics on client projects.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h2>Professional Experience</h2>
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

          {/* Technical Skills */}
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

          {/* Soft Skills */}
          <div className="resume-section">
            <h2>Professional Strengths</h2>
            <div className="skills-grid-resume">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Project Management',
                'Communication',
                'Attention to Detail',
                'Quick Learner',
                'Creative Thinking',
                'Client Relations',
              ].map((skill) => (
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

import React from 'react';
import { CASE_STUDIES } from '../data/portfolio';

function CaseStudies() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Deep Dives</p>
          <h1>Case Studies</h1>
          <p className="lead">
            Detailed breakdowns of my design and development process for complex
            projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {CASE_STUDIES.map((study) => (
            <article key={study.id} className="case-study">
              <div className="case-study-header">
                <span className="case-study-type">{study.type}</span>
                <h2>{study.title}</h2>
                <p className="case-study-excerpt">{study.excerpt}</p>
              </div>

              <div className="case-study-stats">
                <div>
                  <strong>Role</strong>
                  <p>{study.role}</p>
                </div>
                <div>
                  <strong>Timeline</strong>
                  <p>{study.timeline}</p>
                </div>
                <div>
                  <strong>Tools</strong>
                  <p>{study.tools}</p>
                </div>
              </div>

              <div className="case-study-content">
                <h3>Challenge</h3>
                <p>{study.challenge}</p>

                <h3>Solution</h3>
                <p>{study.solution}</p>

                <h3>Results</h3>
                <p>{study.results}</p>
              </div>

              {study.link && (
                <a href={study.link} className="btn btn-secondary">
                  Learn More →
                </a>
              )}

              <hr style={{ margin: '60px 0' }} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;

import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Let's Work Together</p>
          <h1>Have a Project in Mind?</h1>
          <p className="lead">
            I'm always excited to hear about new projects, collaborate with interesting
            teams, or discuss web development. Whether you have a specific project or just
            want to chat, I'd love to connect. Drop me a line and let's create something
            amazing together!
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>How to Reach Me</h2>
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:otienovictor717@gmail.com">otienovictor717@gmail.com</a>
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  I respond to all inquiries within 24-48 hours.
                </p>
              </div>
              <div className="info-item">
                <h4>Current Status</h4>
                <p>✓ Available for new projects and collaborations</p>
              </div>
              <div className="info-item">
                <h4>Work Style</h4>
                <p>Remote-first • Flexible timezones • Worldwide clients</p>
              </div>
              <div className="info-item">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="https://github.com/otienovictor717-svg" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href="mailto:otienovictor717@gmail.com">Email</a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h3 style={{ marginBottom: '40px' }}>What Happens Next?</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '30px',
          }}>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '12px'
              }}>1</div>
              <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>You Share Your Idea</p>
              <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-light)' }}>
                Tell me about your project and goals
              </p>
            </div>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '12px'
              }}>2</div>
              <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>We Discuss Details</p>
              <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-light)' }}>
                Explore scope, timeline, and approach
              </p>
            </div>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '12px'
              }}>3</div>
              <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>Let's Build</p>
              <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-light)' }}>
                Create something exceptional together
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

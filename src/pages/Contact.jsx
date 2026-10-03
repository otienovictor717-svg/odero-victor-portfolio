import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Let's Connect</p>
          <h1>I'd Love to Hear From You</h1>
          <p className="lead">
            Whether you have a project in mind, want to collaborate, or just want to
            chat about web development, I'm always open to new opportunities and
            conversations. Let's create something amazing together!
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:otienovictor717@gmail.com">otienovictor717@gmail.com</a>
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  I'll try to respond within 24-48 hours
                </p>
              </div>
              <div className="info-item">
                <h4>Availability</h4>
                <p>Currently accepting new projects and collaborations</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Remote • Timezone Flexible • Worldwide</p>
              </div>
              <div className="info-item">
                <h4>Follow Me</h4>
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

      {/* Quick Response Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h3>What Happens Next?</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '8px'
              }}>1</div>
              <p style={{ color: 'var(--text-light)' }}>You send a message</p>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '8px'
              }}>2</div>
              <p style={{ color: 'var(--text-light)' }}>I review your inquiry</p>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
                marginBottom: '8px'
              }}>3</div>
              <p style={{ color: 'var(--text-light)' }}>We discuss your project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

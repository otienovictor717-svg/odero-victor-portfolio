import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Get In Touch</p>
          <h1>Let's Work Together</h1>
          <p className="lead">
            Have a project in mind? Want to collaborate? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:victor@example.com">victor@example.com</a>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Remote • Available Worldwide</p>
              </div>
              <div className="info-item">
                <h4>Social</h4>
                <div className="social-links">
                  <a href="https://github.com/otienovictor717-svg" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/victorodero" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/victorodero" target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

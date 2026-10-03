import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Get In Touch</p>
          <h1>Let&apos;s Work Together</h1>
          <p className="lead">
            Have a project in mind? Want to collaborate? I&apos;d love to hear from you.
            Fill out the form below and I&apos;ll get back to you as soon as possible.
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
                <a href="mailto:otienovictor717@gmail.com">otienovictor717@gmail.com</a>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Remote • Worldwide</p>
              </div>
              <div className="info-item">
                <h4>Social</h4>
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
    </div>
  );
}

export default Contact;

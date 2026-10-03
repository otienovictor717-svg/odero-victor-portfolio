import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: 'https://github.com/otienovictor717-svg' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/victorodero' },
    { label: 'Twitter', href: 'https://twitter.com/victorodero' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Victor Odero</h3>
            <p>Frontend Developer & UI Designer</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Victor Odero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

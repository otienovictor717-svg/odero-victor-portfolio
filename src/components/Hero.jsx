function Hero({ stats, socials }) {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Developer • UI Designer</p>
          <h1>
            I build clean, memorable digital experiences that help ideas stand out.
          </h1>
          <p className="lead">
            I&apos;m Victor Odero, a developer focused on turning product ideas into polished,
            responsive, and user-centered experiences.
          </p>

          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Work
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="social-row" aria-label="Social profiles">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="badge">Available for work</div>
          <div className="profile-panel">
            <div className="avatar">VO</div>
            <div>
              <h3>Victor Odero</h3>
              <p>Product-focused frontend engineer</p>
            </div>
          </div>

          <div className="mini-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="mini-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function Header({ navLinks }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">Victor.</a>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

export default Header;

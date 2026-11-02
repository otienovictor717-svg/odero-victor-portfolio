import React, { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Shop Products', href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const products = [
  {
    badge: 'Best Seller',
    title: 'Luminous Glow Serum',
    subtitle: 'Vitamin C & Hyaluronic Acid',
    price: '$48.00',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
  },
  {
    badge: '',
    title: 'Velvet Matte Lipstick',
    subtitle: 'Long-lasting nude rose tint',
    price: '$24.00',
    image:
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500',
  },
  {
    badge: 'Organic',
    title: 'Botanical Foam Cleanser',
    subtitle: 'Gentle daily pore purifier',
    price: '$32.00',
    image:
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=500',
  },
  {
    badge: '',
    title: 'Hydra-Refresh Mist',
    subtitle: 'Soothing organic rosewater',
    price: '$28.00',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=500',
  },
];

const testimonials = [
  {
    name: 'Samantha Vance',
    initials: 'S',
    message:
      'The Luminous Glow Serum completely changed my texture within two weeks. My skin has never looked this radiant without makeup!',
  },
  {
    name: 'Maya Lin',
    initials: 'M',
    message:
      'Fast shipping and gorgeous packaging! The Velvet Matte Lipstick stays on all day without drying out my lips. Absolutely obsessed.',
  },
  {
    name: 'Jessica Miller',
    initials: 'J',
    message:
      'Customer support helped me pick the right items for my sensitive skin type. Incredible service and quality products.',
  },
];

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="beauty-app">
      <header className="beauty-header">
        <div className="beauty-container beauty-header-inner">
          <a href="#home" className="beauty-brand" aria-label="Go to home page">
            <span className="beauty-brand-icon">
              <i className="fa-solid fa-sparkles"></i>
            </span>
            Glow &amp; Grace
          </a>

          <nav className="beauty-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="beauty-header-actions">
            <button className="beauty-cart" aria-label="Shopping cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="beauty-cart-badge">2</span>
            </button>
            <a href="#products" className="beauty-primary-btn beauty-hidden-mobile">
              Shop Now
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="beauty-hero">
        <div className="beauty-container beauty-hero-grid">
          <div className="beauty-hero-copy">
            <span className="beauty-tag">✨ Premium Beauty &amp; Skincare</span>
            <h1>
              Discover Your Natural <span>Radiance</span>
            </h1>
            <p>
              Curated collection of cruelty-free skincare, luxury makeup, and organic
              essentials designed to empower your everyday beauty routine.
            </p>

            <div className="beauty-hero-actions">
              <a href="#products" className="beauty-primary-btn">
                Explore Collection
              </a>
              <a href="#contact" className="beauty-secondary-btn">
                Get Consultation
              </a>
            </div>
          </div>

          <div className="beauty-hero-visual">
            <div className="beauty-image-frame">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Beauty products showcase"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="beauty-products">
        <div className="beauty-container">
          <div className="beauty-section-heading">
            <h2>Featured Beauty Essentials</h2>
            <p>Hand-picked top tier products loved by thousands of beauty enthusiasts.</p>
          </div>

          <div className="beauty-product-grid">
            {products.map((product) => (
              <article key={product.title} className="beauty-product-card">
                <div className="beauty-product-image-wrap">
                  <img src={product.image} alt={product.title} />
                  {product.badge && <span className="beauty-product-badge">{product.badge}</span>}
                </div>
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>

                <div className="beauty-product-footer">
                  <span className="beauty-price">{product.price}</span>
                  <button className="beauty-add-btn" aria-label={`Add ${product.title} to bag`}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="beauty-testimonials">
        <div className="beauty-container">
          <div className="beauty-section-heading">
            <h2>Loved by Our Community</h2>
            <p>See what real women are saying about their skin transformation.</p>
          </div>

          <div className="beauty-testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="beauty-testimonial-card">
                <div className="beauty-stars" aria-label="Five star rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <p className="beauty-quote">"{testimonial.message}"</p>

                <div className="beauty-reviewer">
                  <div className="beauty-avatar">{testimonial.initials}</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="beauty-contact">
        <div className="beauty-container">
          <div className="beauty-contact-box">
            <div className="beauty-section-heading beauty-text-center">
              <h2>Get in Touch</h2>
              <p>Have questions about your skincare routine or orders? Drop us a line.</p>
            </div>

            <form className="beauty-form" onSubmit={handleSubmit}>
              <div className="beauty-form-grid">
                <div className="beauty-form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Jane Doe" required />
                </div>

                <div className="beauty-form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="jane@example.com" required />
                </div>
              </div>

              <div className="beauty-form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <div className="beauty-form-action">
                <button type="submit" className="beauty-primary-btn beauty-primary-btn-large">
                  Send Message
                </button>
              </div>

              {submitted && (
                <div className="beauty-success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="beauty-footer">
        <div className="beauty-container beauty-footer-inner">
          <p>&copy; 2026 Glow &amp; Grace. All rights reserved.</p>
          <div className="beauty-socials">
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

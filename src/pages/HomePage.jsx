import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ products, testimonials, addToCart }) {
  const categories = ['Skincare', 'Makeup', 'Hair', 'Bundles'];

  return (
    <>
      <section className="beauty-hero">
        <div className="beauty-container beauty-hero-grid">
          <div className="beauty-hero-copy">
            <span className="beauty-tag">✨ Premium beauty & skincare</span>
            <h1>
              Discover your natural <span>radiance</span>
            </h1>
            <p>
              Curated collection of cruelty-free skincare, luxury makeup, and organic essentials
              designed to elevate your everyday beauty routine.
            </p>

            <div className="beauty-hero-actions">
              <Link to="#products" className="beauty-primary-btn">
                Explore collection
              </Link>
              <Link to="/checkout" className="beauty-secondary-btn">
                Get consultation
              </Link>
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

      <section className="beauty-section beauty-products" id="products">
        <div className="beauty-container">
          <div className="beauty-section-heading">
            <h2>Featured beauty essentials</h2>
            <p>Hand-picked top-tier products loved by beauty enthusiasts across the globe.</p>
          </div>

          <div className="beauty-category-row" style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {categories.map((category) => (
              <button key={category} className="beauty-outline-btn" style={{ minHeight: '40px', padding: '0.7rem 1rem' }}>
                {category}
              </button>
            ))}
          </div>

          <div className="beauty-product-grid">
            {products.map((product) => (
              <article key={product.id} className="beauty-product-card">
                <div className="beauty-product-image-wrap">
                  <span className="beauty-product-badge">{product.badge}</span>
                  <Link to={`/product/${product.id}`} className="beauty-product-image-link">
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>

                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>

                <div className="beauty-product-footer">
                  <span className="beauty-price">${product.price}</span>
                  <button className="beauty-add-btn" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="beauty-section beauty-testimonials">
        <div className="beauty-container">
          <div className="beauty-section-heading">
            <h2>Loved by our community</h2>
            <p>See what real women are saying about their skin transformation and glow routine.</p>
          </div>

          <div className="beauty-testimonial-grid">
            {testimonials.map((review) => (
              <article key={review.name} className="beauty-testimonial-card">
                <div>
                  <div className="beauty-stars">★★★★★</div>
                  <p className="beauty-quote">“{review.quote}”</p>
                </div>

                <div className="beauty-reviewer">
                  <div className="beauty-avatar">{review.initials}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <span>Verified buyer</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

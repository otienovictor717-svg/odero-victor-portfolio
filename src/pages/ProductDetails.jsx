import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="beauty-detail-page">
        <div className="beauty-container beauty-empty-state">
          <h2>Product not found</h2>
          <p>The product you are looking for may have been moved or is unavailable.</p>
          <Link to="/" className="beauty-primary-btn">
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="beauty-detail-page">
      <div className="beauty-container beauty-detail-grid">
        <div className="beauty-detail-image-card">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="beauty-detail-copy">
          <span className="beauty-tag">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="beauty-rating">
            <span>★★★★★</span>
            <small>
              {product.rating} ({product.reviews} reviews)
            </small>
          </div>

          <p>{product.description}</p>

          <div className="beauty-price-row">
            <span>Price</span>
            <span className="beauty-detail-price">${product.price}</span>
          </div>

          <div className="beauty-qty-row">
            <label>Quantity</label>
            <div className="beauty-qty-controls">
              <button className="beauty-qty-button" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                −
              </button>
              <span className="beauty-qty-value">{quantity}</span>
              <button className="beauty-qty-button" onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="beauty-detail-actions">
            <button className="beauty-dark-btn" onClick={() => addToCart(product, quantity)}>
              Add to cart
            </button>
            <Link to="/cart" className="beauty-secondary-btn">
              Go to cart
            </Link>
          </div>

          <ul className="beauty-list">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

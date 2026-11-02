import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cartItems, subtotal, shipping, total, updateQuantity, removeFromCart }) {
  if (!cartItems.length) {
    return (
      <section className="beauty-cart-page">
        <div className="beauty-container beauty-empty-state">
          <div style={{ fontSize: '3rem' }}>🛍️</div>
          <h2>Your cart is empty</h2>
          <p>Explore the Glow & Grace collection and add your favorite essentials to your bag.</p>
          <Link to="/" className="beauty-primary-btn">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="beauty-cart-page">
      <div className="beauty-container">
        <div className="beauty-section-heading" style={{ marginBottom: '32px' }}>
          <h2>Your shopping bag</h2>
        </div>

        <div className="beauty-cart-shell">
          <div className="beauty-cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="beauty-cart-item">
                <div className="beauty-cart-thumb">
                  <img src={item.image} alt={item.name} />
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <div className="beauty-cart-meta">{item.category}</div>
                  <div className="beauty-cart-actions">
                    <div className="beauty-qty-controls">
                      <button className="beauty-qty-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span className="beauty-qty-value">{item.quantity}</span>
                      <button className="beauty-qty-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button className="beauty-remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="beauty-cart-price">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <aside className="beauty-summary-card">
            <h3>Order summary</h3>
            <div className="beauty-summary-line">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div className="beauty-summary-line">
              <span>Shipping</span>
              <strong>{shipping === 0 ? 'Free' : `$${shipping}`}</strong>
            </div>
            <div className="beauty-divider" />
            <div className="beauty-summary-line">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
            <Link to="/checkout" className="beauty-dark-btn" style={{ width: '100%', marginTop: '20px' }}>
              Proceed to checkout
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CartPage;

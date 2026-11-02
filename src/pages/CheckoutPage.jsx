import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage({ cartItems, subtotal, shipping, total }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!cartItems.length) {
    return (
      <section className="beauty-checkout-page">
        <div className="beauty-container beauty-empty-state">
          <div style={{ fontSize: '3rem' }}>🧾</div>
          <h2>Checkout is empty</h2>
          <p>Add a few beauty essentials to your bag before proceeding to checkout.</p>
          <Link to="/" className="beauty-primary-btn">
            Shop now
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="beauty-checkout-page">
      <div className="beauty-container beauty-cart-shell">
        <form className="beauty-order-card beauty-checkout-form" onSubmit={handleSubmit}>
          <h3>Delivery information</h3>

          <div className="beauty-form-grid">
            <div className="beauty-field">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" placeholder="Jane" required />
            </div>
            <div className="beauty-field">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" placeholder="Doe" required />
            </div>
          </div>

          <div className="beauty-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="beauty-field">
            <label htmlFor="address">Address</label>
            <textarea id="address" rows="3" placeholder="123 Rosewood Drive" required />
          </div>

          <div className="beauty-form-grid">
            <div className="beauty-field">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Nairobi" required />
            </div>
            <div className="beauty-field">
              <label htmlFor="country">Country</label>
              <select id="country" defaultValue="Kenya">
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Tanzania</option>
                <option>South Africa</option>
              </select>
            </div>
          </div>

          <div className="beauty-field">
            <label htmlFor="payment">Payment method</label>
            <select id="payment" defaultValue="Card">
              <option>Card</option>
              <option>M-Pesa</option>
              <option>Cash on delivery</option>
            </select>
          </div>

          {submitted && (
            <div className="beauty-order-success">Order placed successfully! A confirmation email will be sent shortly.</div>
          )}

          <button type="submit" className="beauty-dark-btn" style={{ width: '100%' }}>
            Place order
          </button>
        </form>

        <aside className="beauty-summary-card">
          <h3>Order summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="beauty-summary-line">
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>${item.price * item.quantity}</strong>
            </div>
          ))}

          <div className="beauty-divider" />
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
        </aside>
      </div>
    </section>
  );
}

export default CheckoutPage;

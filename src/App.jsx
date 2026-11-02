import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { products, testimonials } from './data/products';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { id: product.id, quantity }];
    });
  };

  const updateQuantity = (productId, nextQuantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: nextQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const cartItems = useMemo(
    () =>
      cart.map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      }).filter(Boolean),
    [cart]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const shipping = cartItems.length > 0 ? (subtotal > 120 ? 0 : 12) : 0;
  const total = subtotal + shipping;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="beauty-app">
        <header className="beauty-header">
          <div className="beauty-container beauty-header-inner">
            <Link to="/" className="beauty-brand">
              <span className="beauty-brand-icon">✦</span>
              Glow & Grace
            </Link>

            <nav className="beauty-nav" aria-label="Main navigation">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <NavLink to="/checkout">Checkout</NavLink>
            </nav>

            <div className="beauty-header-actions">
              <Link to="/cart" className="beauty-cart" aria-label="Cart">
                🛍️
                {cartCount > 0 && <span className="beauty-cart-badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage products={products} testimonials={testimonials} addToCart={addToCart} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  cartItems={cartItems}
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                />
              }
            />
          </Routes>
        </main>

        <footer className="beauty-footer">
          <div className="beauty-container beauty-footer-inner">
            <p>© 2026 Glow & Grace. All rights reserved.</p>
            <div className="beauty-socials" aria-label="Social links">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Facebook">◌</a>
              <a href="#" aria-label="TikTok">◍</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

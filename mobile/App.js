import React, { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { products } from './src/data/products';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, nextQuantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, nextQuantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const cartItems = useMemo(() => cart, [cart]);
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const shipping = cartItems.length > 0 ? (subtotal > 120 ? 0 : 12) : 0;
  const total = subtotal + shipping;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppNavigator
          products={products}
          cartItems={cartItems}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          cartCount={cartCount}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

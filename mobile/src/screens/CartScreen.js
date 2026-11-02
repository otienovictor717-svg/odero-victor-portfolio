import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CartScreen({ cartItems, subtotal, shipping, total, updateQuantity, removeFromCart, navigation }) {
  if (!cartItems.length) {
    return (
      <View style={styles.emptyWrap}>
        <Text style={styles.emptyEmoji}>🛍️</Text>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptyText}>Explore the Glow & Grace collection and add your favorite essentials to your bag.</Text>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.primaryButtonText}>Continue shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Your shopping bag</Text>

      <View style={styles.cartBox}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Image source={{ uri: item.image }} style={styles.thumb} />

            <View style={styles.itemBody}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>

              <View style={styles.itemControls}>
                <View style={styles.qtyBox}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Text style={styles.qtyButton}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Text style={styles.qtyButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
          </View>
        ))}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Order summary</Text>
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal}</Text>
        </View>
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>{shipping === 0 ? 'Free' : `$${shipping}`}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>${total}</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.primaryButtonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fdfaf8',
  },
  contentContainer: {
    padding: 18,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
    marginBottom: 18,
  },
  cartBox: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#f1e6e1',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  itemRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0e7e2',
  },
  thumb: {
    width: 84,
    height: 84,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  itemBody: {
    flex: 1,
    marginLeft: 14,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  itemCategory: {
    marginTop: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  itemControls: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f1ef',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  qtyButton: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 8,
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    minWidth: 20,
    textAlign: 'center',
  },
  removeText: {
    color: '#b45309',
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginLeft: 12,
  },
  summaryBox: {
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#f1e6e1',
    padding: 18,
  },
  summaryTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  summaryLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    color: '#6b7280',
    fontSize: 15,
  },
  summaryValue: {
    color: '#111827',
    fontWeight: '800',
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e7e2',
    marginVertical: 10,
  },
  primaryButton: {
    marginTop: 16,
    backgroundColor: '#111827',
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  emptyWrap: {
    flex: 1,
    backgroundColor: '#fdfaf8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  emptyEmoji: {
    fontSize: 54,
  },
  emptyTitle: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 18,
  },
});

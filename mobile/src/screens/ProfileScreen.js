import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ cartItems, subtotal, shipping, total }) {
  const [submitted, setSubmitted] = useState(false);

  if (!cartItems.length) {
    return (
      <View style={styles.emptyWrap}>
        <Text style={styles.emptyTitle}>Checkout is empty</Text>
        <Text style={styles.emptyText}>Add a few beauty essentials to your bag before proceeding to checkout.</Text>
        <Text style={styles.emptyEmoji}>🧾</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Delivery information</Text>

      <View style={styles.formCard}>
        <View style={styles.row}>
          <TextInput placeholder="First name" style={styles.input} />
          <TextInput placeholder="Last name" style={styles.input} />
        </View>

        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Address" style={[styles.input, styles.textarea]} multiline numberOfLines={3} />

        <View style={styles.row}>
          <TextInput placeholder="City" style={styles.input} />
          <TextInput placeholder="Country" style={styles.input} />
        </View>

        <TextInput placeholder="Payment method" style={styles.input} />

        {submitted && <Text style={styles.success}>Order placed successfully! A confirmation email will be sent shortly.</Text>}

        <TouchableOpacity style={styles.primaryButton} onPress={() => setSubmitted(true)}>
          <Text style={styles.primaryButtonText}>Place order</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Order summary</Text>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.summaryLine}>
            <Text style={styles.summaryLabel}>{item.name} x {item.quantity}</Text>
            <Text style={styles.summaryValue}>${item.price * item.quantity}</Text>
          </View>
        ))}
        <View style={styles.divider} />
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
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
    marginBottom: 18,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#f1e6e1',
    padding: 18,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d7d3d1',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
    color: '#111827',
  },
  textarea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  primaryButton: {
    marginTop: 18,
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
  success: {
    backgroundColor: 'rgba(22, 163, 74, 0.08)',
    color: '#176a3b',
    borderRadius: 14,
    padding: 12,
    fontWeight: '700',
    marginTop: 12,
  },
  summaryCard: {
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
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    color: '#6b7280',
    fontSize: 14,
  },
  summaryValue: {
    color: '#111827',
    fontWeight: '800',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e7e2',
    marginVertical: 10,
  },
  emptyWrap: {
    flex: 1,
    backgroundColor: '#fdfaf8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  emptyEmoji: {
    fontSize: 52,
  },
  emptyTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#6b7280',
    lineHeight: 22,
    marginBottom: 18,
  },
});

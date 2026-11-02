import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ProductDetailScreen({ route, navigation, addToCart }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.infoCard}>
        <Text style={styles.tag}>{product.category}</Text>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.rating}>★★★★★ {product.rating} ({product.reviews} reviews)</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <View style={styles.qtyRow}>
          <Text style={styles.qtyLabel}>Quantity</Text>
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}>
              <Text style={styles.qtyButton}>−</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
              <Text style={styles.qtyButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => addToCart(product, quantity)}>
            <Text style={styles.primaryButtonText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.secondaryButtonText}>Go to cart</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.benefitsTitle}>What it does</Text>
        {product.benefits.map((benefit) => (
          <Text key={benefit} style={styles.benefitItem}>• {benefit}</Text>
        ))}
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
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  image: {
    width: '100%',
    height: 340,
    borderRadius: 28,
    resizeMode: 'cover',
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#f1e6e1',
    padding: 20,
  },
  tag: {
    backgroundColor: '#f4ebe6',
    color: '#b66850',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 14,
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
  },
  rating: {
    marginTop: 10,
    color: '#f59e0b',
    fontWeight: '700',
  },
  description: {
    marginTop: 14,
    color: '#6b7280',
    fontSize: 15,
    lineHeight: 22,
  },
  priceRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  price: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
  },
  qtyRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f1ef',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  qtyButton: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 8,
  },
  qtyValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    minWidth: 22,
    textAlign: 'center',
  },
  actions: {
    marginTop: 20,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#111827',
    borderRadius: 999,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 999,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '700',
    fontSize: 16,
  },
  benefitsTitle: {
    marginTop: 22,
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  benefitItem: {
    marginTop: 8,
    color: '#6b7280',
    lineHeight: 22,
    fontSize: 15,
  },
});

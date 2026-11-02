import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const categories = ['Skincare', 'Makeup', 'Hair', 'Bundles'];

function ProductCard({ item, onPress, onAdd }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.imageWrap}>
        <Text style={styles.badge}>{item.badge}</Text>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDesc} numberOfLines={2}>{item.description}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={onAdd}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation, products, addToCart }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>✨ Premium beauty & skincare</Text>
        <Text style={styles.heroTitle}>Discover your natural <Text style={styles.highlight}>radiance</Text></Text>
        <Text style={styles.heroText}>
          Curated collection of cruelty-free skincare, luxury makeup, and organic essentials designed to elevate your everyday beauty routine.
        </Text>

        <View style={styles.heroActions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('HomeMain', { screen: 'HomeMain' })}
          >
            <Text style={styles.primaryButtonText}>Explore collection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.secondaryButtonText}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured beauty essentials</Text>
        <Text style={styles.sectionSubtitle}>Hand-picked top-tier products loved by beauty enthusiasts.</Text>
      </View>

      <View style={styles.categoryRow}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            onAdd={() => addToCart(item)}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fdfaf8',
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 40,
  },
  heroCard: {
    backgroundColor: '#f4ebe6',
    borderRadius: 28,
    padding: 22,
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 12,
    color: '#b66850',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '800',
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '800',
    letterSpacing: -1.2,
    color: '#111827',
    marginBottom: 10,
  },
  highlight: {
    color: '#c88770',
  },
  heroText: {
    fontSize: 15,
    color: '#6b7280',
    lineHeight: 22,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#e0a996',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 999,
    flex: 1,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 999,
    flex: 1,
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '700',
    textAlign: 'center',
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
  },
  sectionSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 18,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#e0d9d6',
    backgroundColor: '#fff',
  },
  categoryText: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: '48%',
    backgroundColor: '#f9fafb',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    overflow: 'hidden',
    marginBottom: 12,
  },
  imageWrap: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#b96e57',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  productImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 14,
  },
  productName: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.5,
    color: '#111827',
    marginBottom: 6,
  },
  productDesc: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
  },
  cardFooter: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.6,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: -2,
  },
});

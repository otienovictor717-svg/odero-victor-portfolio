import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain">
        {(screenProps) => <HomeScreen {...screenProps} {...props} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="ProductDetail">
        {(screenProps) => <ProductDetailScreen {...screenProps} {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default function AppNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#f0e7e2',
          height: 78,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#c88770',
        tabBarInactiveTintColor: '#6b7280',
      }}
    >
      <Tab.Screen name="Home" options={{ tabBarLabel: 'Home', tabBarIcon: () => '🏠' }}>
        {() => <HomeStackScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        options={{ tabBarLabel: 'Cart', tabBarIcon: () => '🛍️' }}
      >
        {() => <CartScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: 'Profile', tabBarIcon: () => '👤' }}
      >
        {() => <ProfileScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

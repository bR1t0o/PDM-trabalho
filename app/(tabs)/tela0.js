import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../../components/HomeScreen.js';
import { useState } from 'react';

export default function App() {
  const [ativaCard, setAtivaCard] = useState(false);
  const handleCard = () => {
    setAtivaCard(!ativaCard);
  };

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

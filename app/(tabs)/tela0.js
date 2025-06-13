import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CardPrincipal from '../../components/cardF.js'
import { useState } from 'react';

export default function App() {

      const [card, setativaCard] = useState(false);

  const handleCard = () => {

        setativaCard(!card)

    }
  return (
    <Pressable  style={{flex:1}} onPress={handleCard }>
    <View style={styles.container} >
      {card && <CardPrincipal/>}
     
      <StatusBar style="auto" />
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

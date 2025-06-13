import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TELA 1 </Text>
      <Button title='Ir para tela 4' onPress={()=>{router.push('/tela4')}}/>
      
      <StatusBar style="auto" />
    </View>
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

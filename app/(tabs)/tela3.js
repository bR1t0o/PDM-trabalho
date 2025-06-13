import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardSecundario from '../../components/card.js'


export default function App() {



  return (
    <View style={styles.container}>
      

        <CardSecundario />

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

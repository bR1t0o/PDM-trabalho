import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

// Importa seu componente FormCard (ajuste o caminho conforme sua estrutura)
import FormCard from '../../components/FormCard';

export default function App() {
  return (
    <View style={styles.container}>
      <FormCard />
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

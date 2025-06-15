import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import CardSecundario from '../../components/card.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        Detalhes das Assinaturas
      </Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <CardSecundario />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },
  titulo: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  scroll: {
    paddingBottom: 20,
  },
});

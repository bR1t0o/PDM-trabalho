import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, FAB, Card, ActivityIndicator } from 'react-native-paper';
import { db } from '../src/firebaseConnection';
import { collection, getDocs } from 'firebase/firestore';

const adicionarUmMes = (dataString) => {
  const data = new Date(dataString);
  data.setMonth(data.getMonth() + 1);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

const HomeScreen = () => {
  const [assinaturas, setAssinaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarAssinaturas = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'assinaturas'));
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        lista.sort(
          (a, b) => new Date(a.dataRenovacao) - new Date(b.dataRenovacao),
        );

        setAssinaturas(lista);
      } catch (error) {
        console.error('Erro ao buscar assinaturas:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarAssinaturas();
  }, []);

  const gastoTotal = assinaturas.reduce(
    (soma, item) => soma + (parseFloat(item.valorMensal) || 0),
    0,
  );

  const proximasRenovacoes = assinaturas.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        Resumo Financeiro
      </Text>

      <Text style={styles.totalGasto}>
        Gasto Total Estimado:{' '}
        <Text style={styles.valor}>R$ {gastoTotal.toFixed(2)}</Text>
      </Text>

      <Text variant="titleMedium" style={styles.subtitulo}>
        Próximas Renovações
      </Text>

      {loading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={{ marginTop: 32 }}
        />
      ) : (
        <FlatList
          data={proximasRenovacoes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card} mode="elevated">
              <Card.Title
                title={item.nomeAssinatura}
                titleStyle={styles.cardTitle}
              />
              <Card.Content>
                <Text>Valor: R$ {parseFloat(item.valorMensal).toFixed(2)}</Text>
                <Text>Renovação: {adicionarUmMes(item.dataRenovacao)}</Text>
              </Card.Content>
            </Card>
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: 16 }}>
              Nenhuma assinatura encontrada.
            </Text>
          }
        />
      )}

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Adicionar nova assinatura')}
        label="Adicionar"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
  },
  titulo: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  totalGasto: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  valor: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  subtitulo: {
    marginBottom: 12,
    fontWeight: '600',
  },
  card: {
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#2e7d32',
  },
});

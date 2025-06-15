import { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { db } from '../src/firebaseConnection';
import { collection, addDoc } from 'firebase/firestore';
import { useCard } from '../context/CardContext';

const FormCard = () => {
  const { adicionarCard } = useCard();
  const [nomeAssinatura, setNomeAssinatura] = useState('');
  const [valorMensal, setValorMensal] = useState('');
  const [dataRenovacao, setDataRenovacao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    if (
      !nomeAssinatura.trim() ||
      !valorMensal.trim() ||
      !dataRenovacao.trim() ||
      !categoria.trim()
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'assinaturas'), {
        nomeAssinatura: nomeAssinatura.trim(),
        valorMensal: parseFloat(valorMensal),
        dataRenovacao,
        categoria: categoria.trim(),
      });
      Alert.alert('Sucesso', 'Assinatura salva com sucesso!');
      adicionarCard(nomeAssinatura, valorMensal, dataRenovacao, categoria);
      setNomeAssinatura('');
      setValorMensal('');
      setDataRenovacao('');
      setCategoria('');
    } catch (error) {
      console.error('Erro ao salvar assinatura:', error);
      Alert.alert('Erro', 'Não foi possível salvar a assinatura.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        Nova Assinatura
      </Text>

      <TextInput
        label="Nome da Assinatura*"
        value={nomeAssinatura}
        onChangeText={setNomeAssinatura}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Valor Mensal (R$)*"
        value={valorMensal}
        onChangeText={setValorMensal}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Data da Próxima Renovação*"
        value={dataRenovacao}
        onChangeText={setDataRenovacao}
        placeholder="YYYY-MM-DD"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Categoria*"
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Ex: Streaming, Educação"
        mode="outlined"
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleSalvar}
        loading={loading}
        disabled={loading}
        buttonColor="#2e7d32"
        style={styles.botao}
      >
        Adicionar Assinatura
      </Button>
    </View>
  );
};

export default FormCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  botao: {
    marginTop: 12,
    borderRadius: 6,
  },
});

import { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button, HelperText, Text } from 'react-native-paper';
import { db } from '../src/firebaseConnection';
import { collection, addDoc } from 'firebase/firestore';

const FormCard = () => {
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
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Nova Assinatura
      </Text>

      <TextInput
        label="Nome da Assinatura*"
        value={nomeAssinatura}
        onChangeText={setNomeAssinatura}
        mode="outlined"
        style={{ marginBottom: 12 }}
      />

      <TextInput
        label="Valor Mensal (R$)*"
        value={valorMensal}
        onChangeText={setValorMensal}
        keyboardType="numeric"
        mode="outlined"
        style={{ marginBottom: 12 }}
      />

      <TextInput
        label="Data da Próxima Renovação*"
        value={dataRenovacao}
        onChangeText={setDataRenovacao}
        placeholder="YYYY-MM-DD"
        mode="outlined"
        style={{ marginBottom: 12 }}
      />

      <TextInput
        label="Categoria*"
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Ex: Streaming, Educação"
        mode="outlined"
        style={{ marginBottom: 20 }}
      />

      <Button
        mode="contained"
        onPress={handleSalvar}
        loading={loading}
        disabled={loading}
      >
        Adicionar Assinatura
      </Button>
    </View>
  );
};

export default FormCard;

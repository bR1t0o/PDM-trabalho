import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  Pressable,
  Platform,
} from 'react-native';
import { useCard } from '../context/CardContext.js';
import card_styles from './card_styles.js';

const CardItem = ({ item }) => {
  const { width: largura, height: altura } = useWindowDimensions();
  const { removerCard } = useCard();

  return (
    <Pressable onLongPress={() => removerCard(item.id)}>
      <View style={[getStyle(largura, altura).container]}>
        <View style={card_sec.header}>
          <Text style={[card_styles.titulo, card_sec.titulo]}>
            {item.titulo}
          </Text>
        </View>

        <View style={card_sec.body}>
          <View style={card_sec.tags}>
            <Text style={card_sec.text}>Categoria: {item.categoria}</Text>
          </View>

          <Text style={card_sec.text}>Valor: {item.valor}</Text>
          <Text style={card_sec.text}>Renovação: {item.data}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const CardSecundario = () => {
  const { cardsSalvos } = useCard();

  return (
    <FlatList
      style={{ flex: 1 }}
      data={cardsSalvos}
      renderItem={({ item }) => <CardItem item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingVertical: 16 }}
    />
  );
};

function getStyle(largura, altura) {
  return StyleSheet.create({
    container: {
      backgroundColor: '#1e1e1e',
      width: largura * 0.9,
      height: altura * 0.2,
      borderRadius: 16,
      padding: 12,
      marginBottom: 16,
      alignSelf: 'center',

      // Sombra para Android
      elevation: 4,

      // Sombra para iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });
}

const card_sec = StyleSheet.create({
  header: {
    width: '100%',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
  },
  tags: {
    marginBottom: 4,
  },
  text: {
    color: '#f0f0f0',
    fontSize: 14,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default CardSecundario;

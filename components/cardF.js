import { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

import card_styles from './card_styles.js';
import Icon from '@expo/vector-icons/Ionicons';

import { useCard } from '../context/CardContext';

const CardPrincipal = () => {

    const { adicionarCard } = useCard();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [card, ativaCard] = useState(false);

    const handleSalvar = () => {
        if (titulo.trim() && descricao.trim()) {
            adicionarCard(titulo, descricao);
            setTitulo('');
            setDescricao('');
        }
    };

    
    return (

        <View style={[card_styles.card_container]}>

            <Header_Card text={titulo} setText={setTitulo} />


            <Body_Card text={descricao} setText={setDescricao} />

            <Footer_Card onSalvar={handleSalvar} />

        </View>

    );
};

const Header_Card = (props) => {
    return (
        <View style={card_styles.header}>

            <View style={card_styles.dropdown_container}>
                <TextInput style={card_styles.titulo}
                    placeholder="Descreva o que aconteceu"
                    placeholderTextColor='rgba(250, 250, 250, 1)'
                    maxLength={18} // pq chaves, quando usar chaves?
                    value={props.text} //pq chaves?
                    onChangeText={props.setText} // como queeu posso fazer setText() e parenteses? Ele ta puxando lá de cima? então não preciso fazer os parametros?
                >
                </TextInput>
            </View>

            <View style={card_styles.divisoriaH}></View>
            <View style={card_styles.helper}>
                <View >
                    <Icon name='information-circle-outline' size={20} color={'white'} />
                </View>
                <Text style={card_styles.helper} >O título deve resumir o tipo de infração como, por exemplo ”Assalto” ou "furto".</Text>

            </View>

        </View>
    )
}
const Body_Card = (props) => {
    return (

        <View style={card_styles.body}>
            <View style={card_styles.tags}>

            </View>

            <View style={[card_styles.textBox]}><TextInput
                style={[card_styles.descricao]}
                placeholder="Descreva o que aconteceu"
                placeholderTextColor="rgba(250, 250, 250, 1)"
                multiline={true} //pode ter várias linhas
                maxLength={140}  //caracteres maximos
                value={props.text}
                onChangeText={props.setText} //onChangeText é uma prop específica do textInput que é chamado toda vez que vc digita algo; Essa arrow function aí é a mesma coisa que function handleContentSizeChange(event) { setInputHeight(event.nativeEvent.contentSize.height);setInputHeight(event.nativeEvent.contentSize.height);} onContentSizeChange={handleContentSizeChange}
            //recebe um evento quando o textinput muda onContentSizeChange




            ></TextInput></View>
            <View style={card_styles.media}>

            </View>
        </View>
    )
}

const Footer_Card = ({ onSalvar }) => {
    return (

        <View style={card_styles.footer}>

            <Button title="Salvar" onPress={onSalvar} />



        </View>
    )
}
export default CardPrincipal;



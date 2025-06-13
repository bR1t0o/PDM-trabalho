import { StyleSheet } from 'react-native';

const card_styles = StyleSheet.create({
    // card_container vai ser um view
    card_container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //flex: 1,
        width: '88.6%',
        height: '48%',
        minWidth: 365,
        minHeight: 427,
        padding: '4.38%',
        borderRadius: '6.58%',
        gap: '6%',
        boxShadow: '0 4 12 0 rgba(0,0,0,0.5)',
       position: 'absolute',
       overflow: 'hidden'
    },
    
    // header vai ser outro view
    header: {
        minWidth: 333,
        //minHeight: 72, //botar limite de letras
        width: '91%',
        height: '20.8%',
        //maxHeight: '18%',
        // gap: '2.19%',
        //  backgroundColor: 'rgba(0, 0, 0, 0.15)'//teste visual

    },
    titulo: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20, //é pra ser 20
        color: 'rgba(250, 250, 250, 1)',
        flex: 1


    },
    divisoriaH: {

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(192, 192, 192, 1)',
        alignContent: 'center',



    },
    helper: {
        flex: 1,
        flexDirection: 'row',
        gap: '2.4%',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: 'rgba(250, 250, 250, 1)'

    },
    //outra view
    body: {
        minWidth: 333,
        minHeight: 241,
        width: '91%',
        height: '56.4%', //botar limite de letras
        gap: '4.4%',
        //  backgroundColor: 'rgb(233, 6, 6)'
    },

    tags: {

        width: 333,
        height: 70,
        marginBottom: 12 ,// Espaço para o próximo elemento
      //  height: '33%',
        //backgroundColor: 'green',
        //  width: '100%',
        //alignSelf: 'center',
        // flexDirection: 'row'
    },
    textBox: {

        //flex: 1,
        //minWidth: 333,
        height: '33%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(192, 192, 192, 1)',
        alignSelf: 'center',
        borderRadius: 8.68 

    },
    descricao: {

        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: 'rgba(250, 250, 250, 1)',

        margin: '2%',
        //lineHeight: 30,
        //PRA props tipo maxLenght ou palceholder= y eu tenho que sempre declarar-los no próprio componente?
        // textAlignVertical: 'top'





    },

    media: {
        
        flexDirection: 'row',
        gap:10,
       // backgroundColor: 'blue',
       
       
    },
    //outra view
    footer: {
        //minWidth: 333,
        minHeight: 34,
       // width: '100%',
     
        gap: '3%',
        //backgroundColor:'green',
        flex: 1,

        //backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        justifyContent: 'flex-end'
        //justifyContent: 'flex-end'

        //aqui eu tenho que ter as tags
        //media nao vai ter por enquanto
    },
    dropdown_container: {
        flexDirection: 'row',
        //backgroundColor:'rgba(255, 0, 0, 1)',


    }




});
export default card_styles;
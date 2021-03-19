import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        containerImage: {
            flex: 1,
            backgroundColor: '#FF0000',
        },
        containerTitre: {
            flex: 1,
            backgroundColor: '#1a1a1a',
            paddingTop: 10,
            padding: 10,
        },
        mainImage: {
            height: '100%',
            width: '100%',
        },
        mainTextTitleWhite: {
            color: '#c0d1ce',
        },
        h1Titre: {
            fontSize: 30,
            textTransform: 'uppercase',
        },
        address: {
            fontSize: 14,
        },
        separator: {
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
            width: 80,
        },
        openTitle: {
            marginTop: 5,
            fontSize: 18,
        },
        buttonCommandContainer: {
            marginTop: 50,
            alignItems: 'center',
        },
        buttonCommand: {
            backgroundColor: '#c61e1e',
            paddingTop: 8,
            paddingBottom: 10,
            paddingLeft: 40,
            paddingRight: 40,
            textAlign: 'center',
            borderRadius: 7,
        },
        textButtonCommand: {
            color: '#eaf05e',
            fontSize: 18,
            textTransform: 'uppercase',
        },
    }
);

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#c0d1ce',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingBottom: 10,
        },
        menuImage: {
            width: 120,
            height: 120,
            flex: 1,
        },
        textContainer: {
            flex: 2, paddingLeft: 25,
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },
        textMenu: {
            color: '#c0d1ce',
            fontSize: 18,
        },
    }
);

export default styles;

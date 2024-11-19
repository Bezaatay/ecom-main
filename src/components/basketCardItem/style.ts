import { StyleSheet } from 'react-native';
import { Color } from '../../../values/colors';

const basketCardItemstyles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        height: 200,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.grape,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18
    },
    image: {
        width: '30%',
        height: '80%',
        resizeMode: "cover",
        marginRight: 15,
    },
    alignment: {
        width: '45%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    description: {
        width: '95%',
        color: 'grey',
        textAlign: 'left'
    },
    total: {
        fontSize: 18
    },
    delete: {
        marginTop: '38%'
    }
});

export default basketCardItemstyles;

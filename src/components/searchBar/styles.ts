import { StyleSheet } from 'react-native';
import { Color } from '../../../values/colors';

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Color.platinum,
        borderRadius: 10,
        margin: 5
    },
    input: {
        width: '90%',
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        marginLeft: 20
    },
    icon: {
        marginRight: 20
    }
});

export default styles;

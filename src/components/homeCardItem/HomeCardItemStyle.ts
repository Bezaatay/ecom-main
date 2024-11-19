import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeCardItemStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        elevation: 5
    },
    image: {
        width: '100%',
        height: 200
    },
    button: {
        height: 50,
        width: '80%'
    },
    dataName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    dataDescription: {
        fontSize: 14,
        paddingHorizontal: 10,
        marginBottom: 5

    },
    dataPrice: {
        position: 'absolute',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingVertical: 6,
        paddingHorizontal: 40,
        borderRadius: 5,
        top: 156
    },
    datafavoriteButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        padding: 7,
        position: 'absolute',
        top: 7,
        right: 10

    },
    favIcon: {
        fontSize: 24,
        color: 'red'
    },
    homeIcon: {
        fontSize: 24,
        color: 'white'
    }
})
export default HomeCardItemStyle
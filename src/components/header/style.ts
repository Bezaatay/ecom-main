import { StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5
    },
    title: {
        fontSize: 20,
        color: Color.black,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    iconBackround: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(230, 230, 230, 0.3)',
        borderRadius: 50,
        padding: 8,
    }
});

export default headerStyles;

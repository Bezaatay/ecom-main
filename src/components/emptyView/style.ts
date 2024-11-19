import { StyleSheet } from "react-native"
import { Color } from "../../../values/colors";
const emptyViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {


    },
    text: {
        fontSize: 16,
        color: Color.A8Silver,
        textAlign: 'center'
    }
})
export default emptyViewStyles;
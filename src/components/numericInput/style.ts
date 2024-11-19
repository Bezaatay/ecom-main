import { StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.platinum,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 25,
    },
});
export default styles

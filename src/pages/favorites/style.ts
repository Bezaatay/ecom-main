import { StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    }
    , button: {
        width: '90%',
        height: 60,
    },
    cardContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
})
export { styles }
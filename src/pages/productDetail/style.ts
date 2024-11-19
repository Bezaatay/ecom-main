import { StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        width: '100%',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav: {
        width: '100%',
        position: 'absolute',
        top: 0
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 16,
        color: Color.davysGrey,
    },
    contentContainer: {
        padding: 10,
    },
    numeric: {
        alignItems: 'center',
        paddingBottom: 20
    },
    bottom: {
        position: 'absolute',
        bottom: 0
    }
});
export { styles };

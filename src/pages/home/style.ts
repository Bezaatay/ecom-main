import { StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    header: {

    },
    searchBar: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    },
    items: {
        marginLeft: 5,
        marginRight: 5,
    },
    cardContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
    flatList: {
        flex: 1,
        paddingHorizontal: 10,
    },
    loading: {
        fontWeight: "bold"
    },
    result_text: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 5
    },
    hide_bar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 8
    }
});
export { styles }
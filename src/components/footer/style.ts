import { StyleSheet } from "react-native"

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 90,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        elevation: 30
    },
    text: {
        fontSize: 18
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default footerStyles;
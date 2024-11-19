import { StyleSheet } from 'react-native'
import { Color } from '../../../values/colors'

const BottomSheetModalstyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        height: '45%',
        width: '100%',
        backgroundColor: Color.babyPowder,
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 50,
        borderStartStartRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
    },
    expandedContainer: {
        height: '50%', // Uyarı görünürken ekstra alan
    },
    bar: {
        height: 4,
        width: '40%',
        backgroundColor: Color.black,
        borderRadius: 50,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Color.fireEngineRed,
    },
    error: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    textError: {
        color: Color.fireEngineRed,
    },
    btn: {
        flexDirection: 'row',
        width: '100%',
        gap: 8,
    },
    customButton: {
        flex: 1,
        height: 60
    },
    input: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.platinum,
        padding: 16,
    },
})

export default BottomSheetModalstyles

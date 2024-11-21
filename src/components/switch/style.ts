import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../../../values/colors";

//ekran boyutu hesaplama
const { width, height } = Dimensions.get('window');

const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active_switch_bcg: {
        justifyContent: 'center',
        backgroundColor: Color.timberFlow,
        width: 180,
        height: 75,
        borderRadius: 50
    },
    active_toggle: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: Color.black
    },
    passive_switch_bcg: {
        justifyContent: 'center',
        backgroundColor: Color.timberFlow,
        width: 180,
        height: 75,
        borderRadius: 50
    },
    passive_toggle: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: Color.lavenderBlush
    }
})
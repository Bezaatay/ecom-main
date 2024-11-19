import { StyleProp, ViewStyle } from "react-native";

export type CustomButtonProps = {
    title: string,
    titleColor?: string,
    backgroundColor?: string,
    variant?: 'filled' | 'outlined',
    onPress: () => void,
    style?: StyleProp<ViewStyle>
};
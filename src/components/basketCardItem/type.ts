import { ImageSourcePropType } from "react-native"

export type basketCardItemProps = {
    id: number
    imageUrl: ImageSourcePropType,
    title: string,
    description: string,
    total: number,
    itemPrice: number,
    onPress: (id: number) => void,
    onUpdateCount: (id: number, newCount: number) => void;
}
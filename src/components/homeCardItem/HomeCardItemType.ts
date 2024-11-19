import { ImageSourcePropType } from "react-native";

export type HomeCardItemType = {
    id: number;
    images: string;
    name: string;
    description: string;
    price: number;
    favOnPress?: () => void;
    isFavorite?: boolean;
    onPress: () => void
}
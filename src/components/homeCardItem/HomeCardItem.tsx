import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { HomeCardItemType } from './HomeCardItemType';
import styles from './HomeCardItemStyle';
import Button from '../button/button';
import { Strings } from '../../../values/strings';

const HomeCardItem: React.FC<HomeCardItemType> = (props) => {
    const { images, name, description, price, favOnPress, isFavorite, onPress } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: images }} style={styles.image} />
            <Text style={styles.dataName} numberOfLines={2}>{name}</Text>
            <Text numberOfLines={2} style={styles.dataDescription}>{description}</Text>
            <View style={{ alignItems: 'center' }}>
                <Button title={Strings.examine} onPress={onPress} style={styles.button} />
            </View>
            <Text numberOfLines={1} style={styles.dataPrice}>{price}{Strings.tl2}</Text>

            <TouchableOpacity style={styles.datafavoriteButton} onPress={favOnPress}>
                {isFavorite ? (
                    <Text>{Strings.heart_emoji}</Text>
                ) : (
                    <Text>{Strings.empty_heart}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default HomeCardItem;

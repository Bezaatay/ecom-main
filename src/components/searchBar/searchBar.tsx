import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { Strings } from '../../../values/strings';
import { searchBarType } from './type';
import Badge from '../badge/badge';

const SearchBar: React.FC<searchBarType> = ({ value, onChangeText, onPress, visibility }) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={Strings.search}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={onPress}>
                <View style={styles.icon}>
                    <Text>{Strings.filter_emoji}</Text>
                    <Badge visibility={visibility} count={1} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

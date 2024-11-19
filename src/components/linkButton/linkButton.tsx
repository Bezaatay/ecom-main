import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { linkButtonStyles } from './style';
import { linkButtonProps } from './type';

const LinkButton: React.FC<linkButtonProps> = (props) => {
    const { text, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={linkButtonStyles.title}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default LinkButton;

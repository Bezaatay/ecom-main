import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './style';
import { CustomButtonProps } from './type';

const Button: React.FC<CustomButtonProps> = (props) => {

    const { titleColor = '#fff', backgroundColor = 'red', variant = 'filled', title, onPress, style } = props;

    return (
        <TouchableOpacity style={[buttonStyles.container, variant === 'outlined' ? { borderWidth: 1, borderColor: backgroundColor } : { backgroundColor }, style]} onPress={onPress} >
            <Text style={[buttonStyles.text, { color: variant === 'outlined' ? backgroundColor : titleColor }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
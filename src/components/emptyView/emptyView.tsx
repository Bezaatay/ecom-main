import { View, Image, Text } from 'react-native';
import React from 'react';
import emptyViewStyles from './style';
import { emptyViewProps } from './type';

const EmptyView: React.FC<emptyViewProps> = (props) => {
    const { titleText, text } = props

    return (
        <View style={emptyViewStyles.container}>
            <Image source={require('../../images/empty-view-bcg-image.png')} />
            <Text style={emptyViewStyles.title}>{titleText}</Text>
            <Text style={emptyViewStyles.text}>{text}</Text>
        </View>
    );
}

export default EmptyView;


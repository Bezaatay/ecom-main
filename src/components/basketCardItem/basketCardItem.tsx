import { View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import basketCardItemstyles from './style';
import NumericInp from '../numericInput/numericInp';
import { Strings } from '../../../values/strings';
import LinkButton from '../linkButton/linkButton';
import { basketCardItemProps } from './type';

const BasketCardItem: React.FC<basketCardItemProps> = (props) => {
    const { id, imageUrl, title, description, total, itemPrice, onPress, onUpdateCount } = props;
    const [count, setCount] = useState<number>(total);
    const [totalAmount, setTotalAmount] = useState<number>(parseFloat((total * itemPrice).toFixed(2)));

    const handleChangeValue = (newCount: number) => {
        setCount(newCount);
        const newTotal = newCount * itemPrice;
        setTotalAmount(parseFloat(newTotal.toFixed(2)));

        onUpdateCount(id, newCount);
    };

    return (
        <View style={basketCardItemstyles.container}>
            <View style={basketCardItemstyles.image}>
                <Image
                    source={imageUrl}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
            </View>
            <View style={basketCardItemstyles.alignment}>
                <Text style={basketCardItemstyles.title}>
                    {title}
                </Text>
                <Text style={basketCardItemstyles.description} numberOfLines={2}>
                    {description}
                </Text>
                <NumericInp total={count} onChangeValue={handleChangeValue} />
                <Text style={basketCardItemstyles.total}>
                    {totalAmount} {Strings.tl}
                </Text>
            </View>
            <View style={basketCardItemstyles.delete}>
                <LinkButton text={Strings.delete} onPress={() => onPress(id)} />
            </View>
        </View>
    );
};

export default BasketCardItem;

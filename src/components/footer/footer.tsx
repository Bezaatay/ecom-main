import { View, Text } from 'react-native'
import React from 'react'
import footerStyles from './style'
import { Strings } from '../../../values/strings'
import { footerProps } from './type'
import Button from '../button/button'

const Footer: React.FC<footerProps> = (props) => {
    const { totalPrice, onPress, title } = props
    return (
        <View style={footerStyles.container}>
            <View >
                <Text style={footerStyles.text}>{Strings.total}</Text>
                <Text style={footerStyles.priceText}>{totalPrice} {Strings.tl}</Text>
            </View>
            <Button title={title} onPress={onPress} style={{ width: '35%', height: 50 }}></Button>
        </View>
    )
}

export default Footer
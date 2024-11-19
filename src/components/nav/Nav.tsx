import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Strings } from '../../../values/strings'
import { navProps } from './type'
import { styles } from './styles'


const Nav: React.FC<navProps> = ({ isFavorite, backOnPress, favOnPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={backOnPress}>
                <Text style={{ fontSize: 30 }}>{Strings.back}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.datafavoriteButton} onPress={favOnPress} >
                {isFavorite ?
                    <Text>{Strings.heart_emoji}</Text>
                    :
                    <Text>{Strings.empty_heart}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Nav

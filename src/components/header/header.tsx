import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import headerStyles from './style';
import { HeaderProps } from './type';
import { Strings } from '../../../values/strings';
import Badge from '../badge/badge';

const Header: React.FC<HeaderProps> = (props) => {
    const { title, isBcgVisible, isRightIconVisible = true, onPressRightIcon, onPressleftIcon, badgeCount } = props;

    return (
        <View style={headerStyles.container}>

            <TouchableOpacity onPress={onPressleftIcon}>
                <Text style={{ marginLeft: 12, fontSize: 20 }}>{Strings.heart_emoji}</Text>
            </TouchableOpacity>

            <Text style={headerStyles.title}>{title}</Text>

            {isRightIconVisible && (
                <TouchableOpacity onPress={onPressRightIcon} style={{ paddingRight: 5 }}>
                    <Text style={{ marginRight: 12, fontSize: 20 }}>{Strings.basket_emoji}</Text>
                    <Badge visibility={true} count={badgeCount} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Header;

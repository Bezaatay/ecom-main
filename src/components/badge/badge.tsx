import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type badgeType = {
    count: number,
    visibility: boolean
}

const Badge: React.FC<badgeType> = ({ count, visibility }) => {
    return (
        (visibility && <View style={styles.badge}>
            <Text style={styles.text}>{count}</Text>
        </View>)
    );
};

const styles = StyleSheet.create({
    badge: {
        backgroundColor: 'red',
        borderRadius: 12,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -5,
        right: -5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,

    },
});

export default Badge;

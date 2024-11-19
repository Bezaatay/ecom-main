import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import { maxItemAlert } from '../alerts/maxItemAlert';
import { NumericInputProps } from './type';

const NumericInp: React.FC<NumericInputProps> = (props) => {
    const { total = 1, onChangeValue } = props;
    const [count, setCount] = useState<number>(total);

    const increment = () => {
        if (count < 10) {
            const newCount = count + 1;
            setCount(newCount);
            onChangeValue(newCount);
        } else {
            maxItemAlert()

        }
    };

    const decrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onChangeValue(newCount);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <Text>{count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NumericInp;

import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SwitchType } from './type';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './style';

const Switch: React.FC<SwitchType> = (props) => {

    const { activeToggleColor, activeBcgColor, passiveToggleColor, passiveBcgColor } = props;
    const [isActive, setIsActive] = useState<boolean>(true);
    const sv = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                sv.value,
                [0, 1],
                [passiveBcgColor, activeBcgColor]
            ),
        };
    });

    const animatedToggleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        sv.value,
                        [0, 1],
                        [5, 110]
                    ),
                },
            ],
            backgroundColor: interpolateColor(
                sv.value,
                [0, 1],
                [passiveToggleColor, activeToggleColor]
            ),
        };
    });

    const handleSwitch = () => {
        setIsActive(!isActive);

        sv.value = withTiming(isActive ? 1 : 0, { duration: 300 });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={handleSwitch}>
                <Animated.View
                    style={[
                        isActive ? styles.active_switch_bcg : styles.passive_switch_bcg,
                        animatedStyle
                    ]}
                >
                    <Animated.View
                        style={[
                            isActive ? styles.active_toggle : styles.passive_toggle,
                            animatedToggleStyle,
                        ]}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default Switch;

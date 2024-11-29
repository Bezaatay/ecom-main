import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { OrientationType } from './OrientationType';
import OrientationModule from './Orientation';
import { addLockListener } from './OrientationManager';

const Orien = () => {
    const [currentOrientation, setCurrentOrientation] = useState<OrientationType | undefined>(undefined);

    useEffect(() => {
        // ekran yönü değiştiğinde setCurrentOrientation fonksiyonunu çağır
        addLockListener((orientation: OrientationType) => {
            setCurrentOrientation(orientation);
        });

        // Başlangıçta ekranı yatay yapıyoruz
        OrientationModule.lockToLandscapeLeft();

        return () => {
            //unmount olduğunda ekranı portre moduna kilitle
            OrientationModule.lockToPortrait();

        };
    }, []);

    // currentOrientation null veya undefined olduğunda bir şey render etmeyelim
    if (currentOrientation === undefined) {
        return null;
    }

    return (
        currentOrientation === 'LANDSCAPE-LEFT' ? (
            <View>
                <Text>Orientation Page</Text>
            </View>
        ) : null
    );
};

export default Orien;

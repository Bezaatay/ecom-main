import React from 'react';
import Button from './button/button';
import BrightnessModule from '../modules/BrightnessModule';

const AppModule = () => {
    var brightnessLevel: number;

    function fetchBrightness() {
        BrightnessModule.getBrightness()
            .then((it: number) => {
                brightnessLevel = it; // Parlaklık seviyesini kaydet
                console.log(brightnessLevel);

            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    function setMaxBrightness() {
        fetchBrightness(); // Mevcut parlaklığı kaydet
        BrightnessModule.onChangeBrightness(1)
            .then((onSuccess: any) => {
                console.log(onSuccess);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    function handleChangeBrightness() {
        console.log(brightnessLevel + 'saved brightness level');

        BrightnessModule.onChangeBrightness(brightnessLevel)
            .then((onSuccess: any) => {
                console.log(onSuccess);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <>
            <Button
                title="Max Brightness"
                onPress={setMaxBrightness}
                style={{ height: 50 }}
            />
            <Button
                variant="outlined"
                title="Restore Brightness"
                onPress={handleChangeBrightness}
                style={{ height: 50 }}
            />
        </>
    );
};

export default AppModule;

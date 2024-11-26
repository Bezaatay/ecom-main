import { NativeModules } from 'react-native';

interface BrightnessModuleInterface {
    getBrightness: () => Promise<number>;
    onChangeBrightness: (level: number) => Promise<string>;
}

const { BrightnessModule } = NativeModules as {
    BrightnessModule: BrightnessModuleInterface;
};

export default BrightnessModule;

import { NativeModules } from 'react-native';


interface OrientationModuleInterface {
    lockToPortrait(): void;
    lockToLandscapeLeft(): void;
}


const { OrientationModule } = NativeModules as {
    OrientationModule: OrientationModuleInterface;
};

export default OrientationModule;
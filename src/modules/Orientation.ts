import { NativeModules } from 'react-native';
import { OrientationType } from './OrientationType';


interface OrientationModuleInterface {
    lockToPortrait(): void;
    lockToLandscapeLeft(): void;
}


const { OrientationModule } = NativeModules as {
    OrientationModule: OrientationModuleInterface;
};

export default OrientationModule;
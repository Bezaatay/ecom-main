import { NativeEventEmitter, NativeModules } from 'react-native';
import { OrientationType } from '../types/OrientationType';

const { OrientationModule } = NativeModules;
const LocalEventEmitter = new NativeEventEmitter(OrientationModule);

let listeners: { [key: string]: any } = {};

const addLockListener = (cb: (orientation: OrientationType) => void) => {
    const key = getKey(cb);
    listeners[key] = LocalEventEmitter.addListener(
        'lockDidChange',
        (event: { orientation: string }) => {
            if (isValidOrientation(event.orientation)) {
                cb(event.orientation as OrientationType);
            }
        }
    );
};

const removeAllListeners = () => {
    Object.keys(listeners).forEach((key) => {
        listeners[key].remove();
    });
    listeners = {}; // Dinleyici listesini temizle
};

// Callback'e benzersiz bir anahtar oluşturma
const getKey = (cb: (orientation: OrientationType) => void): string => {
    return cb.toString();
};

// Ekran yönünü doğrulayan fonksiyon
const isValidOrientation = (orientation: string): orientation is OrientationType => {
    return orientation === "PORTRAIT" || orientation === "LANDSCAPE-LEFT";
};

export { addLockListener, removeAllListeners };

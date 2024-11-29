import { NativeModules } from "react-native";

interface ClipboardInterface {
    setString: (text: string) => void;
}

const { ClipboardModule } = NativeModules as {
    ClipboardModule: ClipboardInterface;
};

export default ClipboardModule;

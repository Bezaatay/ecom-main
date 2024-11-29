import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ClipboardModule from '../ClipboardModule';

const ClipText = () => {

    const copyToClipboard = (text: string) => {
        ClipboardModule.setString(text);
        console.log("Copied to clipboard:", text);
    };
    return (
        <View>
            <TouchableOpacity onPress={() => copyToClipboard("ABCDE12345")}>
                <Text>Tap to clip text</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ClipText
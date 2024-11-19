import { View, Text, TextInput, Animated, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import BottomSheetModalstyles from './bottomSheetModal'; // Stil dosyanız
import Button from '../button/button'; // Buton bileşeniniz
import { Strings } from '../../../values/strings'; // Strings dosyanız
import { Color } from '../../../values/colors'; // Renkleriniz

interface BottomSheetProps {
    visibility: boolean;
    onClose: () => void;
    onFilter: (minPrice: string, maxPrice: string) => void;
    onClearFilter: (arg0: boolean) => void
}

const BottomSheet: React.FC<BottomSheetProps> = ({ visibility, onClose, onFilter, onClearFilter }) => {
    const [input1, setInput1] = useState<string>('');
    const [input2, setInput2] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [inputBorders, setInputBorders] = useState<boolean>(false);
    const [cleanText, setCleanText] = useState<boolean>(false)

    const slideAnim = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        if (visibility) {
            // Modal açıldığında yukarı kaydır
            Animated.timing(slideAnim, {
                toValue: 0, // Modal üst tarafa kayacak
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            // Modal kapandığında aşağı kaydır
            Animated.timing(slideAnim, {
                toValue: 300, // Modal tekrar aşağıya kayacak
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visibility]);

    const handleFilter = () => {
        let maxPrice = input1.trim();
        let minPrice = input2.trim();

        if (!minPrice && maxPrice) {
            minPrice = '1';
            setCleanText(true);

        } else if (!maxPrice && minPrice) {
            maxPrice = '100000';
            setCleanText(true);

        } else if (!minPrice && !maxPrice) {
            setShowError(true);
            setInputBorders(true);
            setCleanText(false);
            return;
        }

        setShowError(false);
        setInputBorders(false);
        setCleanText(true);

        // `setTimeout` ile `onClose()` çağrısını buton güncellendikten sonra yapıyoruz.
        setTimeout(() => {
            onFilter(minPrice, maxPrice);
            onClose();
        }, 0);
    };


    const cleanTexts = () => {
        setInput1('')
        setInput2('')
        setCleanText(false)
        onClearFilter(true)
    }

    return (
        <Modal visible={visibility} animationType="none" transparent>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={BottomSheetModalstyles.modalOverlay}>
                    <Animated.View
                        style={[
                            BottomSheetModalstyles.modalContainer,
                            { transform: [{ translateY: slideAnim }] },
                        ]}
                    >
                        <View style={BottomSheetModalstyles.bar}></View>
                        <Text style={BottomSheetModalstyles.text}>{Strings.filter}</Text>
                        <TextInput
                            value={input1}
                            onChangeText={setInput1}
                            keyboardType="numeric"
                            placeholder={Strings.max_price}
                            style={[
                                BottomSheetModalstyles.input,
                                { borderColor: inputBorders ? Color.fireEngineRed : Color.platinum },
                            ]}
                        />
                        <TextInput
                            value={input2}
                            onChangeText={setInput2}
                            keyboardType="numeric"
                            placeholder={Strings.min_price}
                            style={[
                                BottomSheetModalstyles.input,
                                { borderColor: inputBorders ? Color.fireEngineRed : Color.platinum },
                            ]}
                        />
                        {showError && (
                            <View style={BottomSheetModalstyles.error}>
                                <Text style={{ color: Color.fireEngineRed, padding: 8 }}>
                                    {Strings.warning}
                                </Text>
                                <Text style={BottomSheetModalstyles.textError}>
                                    {Strings.filter_least_one_item}
                                </Text>
                            </View>
                        )}
                        <View style={BottomSheetModalstyles.btn}>
                            <Button title={cleanText ? Strings.clean : Strings.refuse} onPress={cleanText ? cleanTexts : onClose} style={BottomSheetModalstyles.customButton} variant='outlined' />
                            <Button title={Strings.filter} onPress={handleFilter} style={BottomSheetModalstyles.customButton} />
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default BottomSheet;

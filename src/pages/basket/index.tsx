import { Alert, FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IndexRouteType } from './type';
import { Strings } from '../../../values/strings';
import { storage } from '../../storage/storage';
import EmptyView from '../../components/emptyView/emptyView';
import { BasketModel } from '../../api/models/Basketmodel';
import BasketCardItem from '../../components/basketCardItem/basketCardItem';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import { styles } from './style';

const BasketScreen = ({ navigation }: IndexRouteType) => {
    const [basket, setBasket] = useState<BasketModel[] | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const storedBasket = storage.getString("basket");

    useEffect(() => {
        if (storedBasket) {
            const parsedBasket = JSON.parse(storedBasket);
            setBasket(parsedBasket);
            setIsEmpty(parsedBasket.length === 0);
        } else {
            setIsEmpty(true);
        }
    }, []);

    useEffect(() => {
        if (basket) {
            const newTotalPrice = basket.reduce((sum, item) => sum + item.product.price * item.count, 0);
            setTotalPrice(newTotalPrice);

            const uniqueIds = new Set(basket.map(item => item.product.id));
            const uniqueCount = uniqueIds.size;

            storage.set('uniqueProductsCount', uniqueCount.toString());
        }

    }, [basket]);

    const handleItem = (id: number) => {
        if (basket) {
            const updatedBasket = basket.filter((item) => item.product.id !== id);
            setBasket(updatedBasket);
            storage.set("basket", JSON.stringify(updatedBasket));
            setIsEmpty(updatedBasket.length === 0);
        }
    };

    const handleUpdateCount = (id: number, newCount: number) => {
        if (basket) {
            const updatedBasket = basket.map((item) =>
                item.product.id === id ? { ...item, count: newCount } : item
            );
            setBasket(updatedBasket);
            storage.set("basket", JSON.stringify(updatedBasket));
        }
    };

    const handleBuyBtn = () => {
        Alert.alert("Satın alım başarıyla gerçekleşti!")
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            {isEmpty ? (
                <View style={styles.page}>
                    <Header title={Strings.favorites} badgeCount={0} />
                    <EmptyView titleText={Strings.empty_fav_list} text={Strings.can_see_favs_after_add} />
                    <Button title={Strings.back_to_homepage} onPress={() => { navigation.navigate('Home') }} style={styles.button} />
                </View>
            ) : (
                <View style={styles.page}>
                    <FlatList
                        data={basket}
                        keyExtractor={(item) => item.product.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <BasketCardItem
                                id={item.product.id}
                                imageUrl={{ uri: item.product.images[0] }}
                                title={item.product.title}
                                description={item.product.description}
                                total={item.count}
                                itemPrice={item.product.price}
                                onPress={() => handleItem(item.product.id)}
                                onUpdateCount={handleUpdateCount}
                            />
                        )}
                    />
                    <Footer title={Strings.buy} totalPrice={totalPrice} onPress={() => handleBuyBtn} />
                </View>
            )}
        </View>
    );
};

export default BasketScreen;

import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IndexRouteType } from './type';
import { getProductById } from '../../api/services/productService';
import Footer from '../../components/footer/footer';
import { Product } from '../../api/models/ProductModel';
import NumericInp from '../../components/numericInput/numericInp';
import Nav from '../../components/nav/Nav';
import { styles } from './style';
import { Color } from '../../../values/colors';
import { storage } from '../../storage/storage';
import { Strings } from '../../../values/strings';
import useFavoriteStore from '../../store/favoriteStore';
import Loader from '../../components/loader/component';

const ProductDetailScreen = ({ navigation, route }: IndexRouteType) => {
    const { id } = route.params;
    const [product, setProduct] = useState<Product | null>(null);
    const [totalAmount, setTotalAmount] = useState<number | null>(null);
    const [count, setCount] = useState<number>(1);
    const { fav, addFav, removeFav, loadFavorites } = useFavoriteStore();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id);
                setProduct(response);
                setTotalAmount(response.price);
                setIsFavorite(checkIfFavorite(response.id));
            } catch (error) {
                console.error('Ürün bilgisi alınamadı', error);
            }
        };

        loadFavorites();
        fetchProduct();
    }, [id, loadFavorites]);

    const checkIfFavorite = (productId: number): boolean => {
        return fav.some((favItem) => favItem.product.id === productId);
    };

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFav(product!.id);
        } else {
            addFav({ isFav: true, product: product! });
        }
        setIsFavorite(!isFavorite);
    };

    const handleChangeValue = (newCount: number) => {
        setCount(newCount);
        if (product) {
            const newTotal = parseFloat((newCount * product.price).toFixed(2));
            setTotalAmount(newTotal);
        }
    };

    if (!product) {
        return (
            <View>
                <Loader />
            </View>
        );
    }

    const handleBasket = () => {
        const model = {
            count: count,
            product: product
        };

        const basket = storage.getString("basket");
        let basketArray = basket ? JSON.parse(basket) : [];

        const existingProductIndex = basketArray.findIndex((item: any) => item.product.id === product.id);

        if (existingProductIndex !== -1) {
            basketArray[existingProductIndex].count += count;
        } else {
            basketArray.push(model);
        }

        storage.set("basket", JSON.stringify(basketArray));
        navigation.navigate('Basket');
    };

    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={{ uri: product.images[0] }}
                    resizeMode="stretch"
                    style={styles.imageBackground}
                >
                    <View style={styles.nav}>
                        <Nav
                            isFavorite={isFavorite}
                            backOnPress={() => navigation.navigate("Home")}
                            favOnPress={toggleFavorite}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.desc}>{product.description}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.numeric}>
                    <NumericInp total={count} onChangeValue={handleChangeValue} />
                </View>
                <Footer title={Strings.add_basket} totalPrice={totalAmount || product.price} onPress={handleBasket} />
            </View>
        </View>
    );
};

export default ProductDetailScreen;

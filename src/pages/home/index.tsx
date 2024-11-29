import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { IndexRouteType } from './type';
import Header from '../../components/header/header';
import { Strings } from '../../../values/strings';
import SearchBar from '../../components/searchBar/searchBar';
import HomeCardItem from '../../components/homeCardItem/HomeCardItem';
import { Product } from '../../api/models/ProductModel';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import LinkButton from '../../components/linkButton/linkButton';
import { styles } from './style';
import { fetchProducts, getProductsByPriceFilter, getProductsByTitle } from '../../api/services/productService';
import { useDebounce } from '../../hooks/useDebounce';
import useFavoriteStore from '../../store/favoriteStore';
import { storage } from '../../storage/storage';
import { useSharedValue } from 'react-native-reanimated';
import OrientationModule from '../../modules/Orientation';
import { OrientationType } from '../../types/OrientationType';
import { addLockListener, removeAllListeners } from '../../modules/OrientationManager';

const HomeScreen = ({ navigation }: IndexRouteType) => {
    const [products, setProducts] = useState<Product[]>([]);

    const deneme = useSharedValue<number>(0);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const debouncedQuery = useDebounce(query);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isBarVisible, setIsBarVisible] = useState<boolean>(false);
    const { fav, addFav, removeFav, loadFavorites } = useFavoriteStore();
    const [uniqueProductsCount, setUniqueProductsCount] = useState<number>(0);
    const [isBarFilterVisible, setIsBarFilterVisible] = useState<boolean>(false)
    const [currentOrientation, setCurrentOrientation] = useState<OrientationType | undefined>(undefined);

    useEffect(() => {
        addLockListener((orientation: OrientationType) => { setCurrentOrientation(orientation) })
        console.log(currentOrientation);

        OrientationModule.lockToPortrait()
        loadFavorites();

        fetchProducts().then((products) => {
            setProducts(products);
            setIsBarVisible(false);
        });

        return () => {
            removeAllListeners();
        }
    }, []);

    useEffect(() => {
        const searchedProducts = async () => {
            if (debouncedQuery.length >= 2) {
                setIsBarVisible(true);
                const response = await getProductsByTitle(debouncedQuery);
                if (response.length > 0) {
                    setProducts(response);
                    setIsEmpty(false);
                } else {
                    setIsEmpty(true);
                }
            } else if (debouncedQuery.length === 0) {
                fetchProducts().then((products) => {
                    setProducts(products);
                    setIsEmpty(false);
                    setIsBarVisible(false);
                });
            }
        };
        searchedProducts();
    }, [debouncedQuery]);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSearch = (text: string) => {
        setQuery(text);
    };

    const handleClear = () => {
        setQuery('');
    };

    const handleFav = (product: Product) => {
        const isFav = fav.some((favItem) => favItem.product.id === product.id);
        if (isFav) {
            removeFav(product.id);
        } else {
            addFav({ isFav: true, product });
        }
    };

    useEffect(() => {
        const storedUniqueCount = storage.getString('uniqueProductsCount');
        if (storedUniqueCount) {
            setUniqueProductsCount(parseInt(storedUniqueCount, 10));
        }
    }, []);

    const handleFilterValues = (min: string, max: string) => {

        getProductsByPriceFilter(min, max).then((products) => {
            if (products.length === 0) {
                setIsEmpty(true)
                setIsBarFilterVisible(true)

            } else {
                setProducts(products)
                setIsBarFilterVisible(true)
                setIsEmpty(false)
            }
        })

    };

    const handleFilterClear = () => {
        loadFavorites();

        fetchProducts().then((products) => {
            setProducts(products);
            setIsBarVisible(false);
        });

        setIsBarFilterVisible(false)
    }
    return (
        currentOrientation === "PORTRAIT" ?
            (<View style={styles.container}>
                <View style={styles.header}>
                    <Header onPressRightIcon={() => navigation.navigate("Basket")}
                        onPressleftIcon={() => navigation.navigate("Favorites")}
                        title={Strings.passo_ecom}
                        badgeCount={uniqueProductsCount}
                    />
                </View>
                <View style={styles.searchBar}>
                    <SearchBar visibility={isBarFilterVisible} value={query} onChangeText={handleSearch} onPress={toggleModal} />
                </View>
                {isBarVisible && (
                    <View style={styles.hide_bar}>
                        <Text style={styles.result_text}>{Strings.results_found}</Text>
                        <LinkButton text={Strings.clean_search} onPress={handleClear} />
                    </View>
                )}
                <View style={styles.items}>
                    {isEmpty ? (
                        <Text style={{ margin: 10 }}>{Strings.cannot_found_product}</Text>
                    ) : (
                        <FlatList
                            data={products}
                            numColumns={2}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.cardContainer}>
                                    <HomeCardItem
                                        id={item.id}
                                        images={item.images[0]}
                                        name={item.title}
                                        description={item.description}
                                        price={item.price}
                                        onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
                                        isFavorite={fav.some((favItem) => favItem.product.id === item.id)}
                                        favOnPress={() => handleFav(item)}
                                    />
                                </View>
                            )}
                        />
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <BottomSheet visibility={isModalVisible} onClose={toggleModal} onFilter={handleFilterValues} onClearFilter={handleFilterClear} />
                </View>
            </View>) : null
    );
};

export default HomeScreen;

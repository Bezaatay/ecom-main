import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { IndexRouteType } from './type';
import Header from '../../components/header/header';
import { Strings } from '../../../values/strings';
import EmptyView from '../../components/emptyView/emptyView';
import Button from '../../components/button/button';
import { styles } from './style';
import useFavoriteStore from '../../store/favoriteStore';
import HomeCardItem from '../../components/homeCardItem/HomeCardItem';
import { Product } from '../../api/models/ProductModel';

const FavoritesScreen = ({ navigation }: IndexRouteType) => {
    const { fav, removeFav, loadFavorites } = useFavoriteStore();

    useEffect(() => {
        loadFavorites();
    }, []);

    const handleFav = (product: Product) => {
        const isFav = fav.some((favItem) => favItem.product.id === product.id);
        if (isFav) {
            removeFav(product.id);
        }
    };

    return (
        <View style={styles.container}>
            <Header isRightIconVisible={false} badgeCount={0} title={Strings.favorites} />
            {fav.length > 0 ? (
                <FlatList
                    data={fav}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.product.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <HomeCardItem
                                id={item.product.id}
                                images={item.product.images[0]}
                                name={item.product.title}
                                description={item.product.description}
                                price={item.product.price}
                                onPress={() => navigation.navigate('ProductDetail', { id: item.product.id })}
                                isFavorite={fav.some((favItem) => favItem.product.id === item.product.id)}
                                favOnPress={() => handleFav(item.product)}
                            />
                        </View>
                    )}
                />
            ) : (
                <>
                    <EmptyView
                        titleText={Strings.empty_fav_list}
                        text={Strings.can_see_favs_after_add}
                    />
                    <Button
                        title={Strings.back_to_homepage}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                        style={styles.button}
                    />
                </>
            )}
        </View>
    );
};

export default FavoritesScreen;

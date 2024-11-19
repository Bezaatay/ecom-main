import { create } from "zustand";
import { Product } from "../api/models/ProductModel";
import { storage } from "../storage/storage";

type FavoriteType = {
    isFav: boolean;
    product: Product;
};

interface FavStateType {
    fav: FavoriteType[];
    addFav: (product: FavoriteType) => void;
    removeFav: (productId: number) => void;
    loadFavorites: () => void;
}

const useFavoriteStore = create<FavStateType>((set) => ({
    fav: [],

    loadFavorites: () => {
        const favorite = storage.getString("favorite");
        const favoritesArray = favorite ? JSON.parse(favorite) : [];
        set({ fav: favoritesArray });
    },

    addFav: (product: FavoriteType) => {
        set((state) => {
            const favorite = storage.getString("favorite");
            let favoritesArray = favorite ? JSON.parse(favorite) : state.fav;

            // Ürün listede varsa index bul
            const existingProductIndex = favoritesArray.findIndex(
                (item: FavoriteType) => item.product.id === product.product.id
            );

            if (existingProductIndex !== -1) {
                // Ürün zaten favorilerde varsa güncelle
                favoritesArray[existingProductIndex] = product;
            } else {
                //favorilere ekle
                favoritesArray.push(product);
            }

            storage.set("favorite", JSON.stringify(favoritesArray));
            return { fav: favoritesArray };
        });
    },

    removeFav: (productId: number) => {
        set((state) => {
            const favorite = storage.getString("favorite");
            let favoritesArray = favorite ? JSON.parse(favorite) : state.fav;

            //ürün favorilerden kaldırılıyor
            favoritesArray = favoritesArray.filter(
                (item: FavoriteType) => item.product.id !== productId
            );

            storage.set("favorite", JSON.stringify(favoritesArray));
            return { fav: favoritesArray };
        });
    },
}));

export default useFavoriteStore;

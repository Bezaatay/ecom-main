import { create } from 'zustand';
import { BasketModel } from '../api/models/Basketmodel';

interface BasketState {
    items: BasketModel[];
    totalPrice: number;
    addItem: (item: BasketModel) => void;
    updateItemCount: (id: number, newCount: number) => void;
    removeItem: (id: number) => void;
}

const useBasketStore = create<BasketState>((set) => ({
    items: [],
    totalPrice: 0,

    addItem: (item: BasketModel) => {
        set((state) => {
            // Sepet içinde mevcutsa, sayısını güncelle
            const existingItemIndex = state.items.findIndex(
                (basketItem) => basketItem.product.id === item.product.id
            );

            let updatedItems = [...state.items];

            if (existingItemIndex !== -1) {
                // Mevcut ürünü güncelle
                updatedItems[existingItemIndex].count += item.count;
            } else {
                // Yeni ürün ekle
                updatedItems.push(item);
            }

            return { items: updatedItems };
        });
    },

    updateItemCount: (id: number, newCount: number) => {
        set((state) => {
            const updatedItems = state.items.map((item) =>
                item.product.id === id ? { ...item, count: newCount } : item
            );
            return { items: updatedItems };
        });
    },

    removeItem: (id: number) => {
        set((state) => {
            const updatedItems = state.items.filter((item) => item.product.id !== id);
            return { items: updatedItems };
        });
    },
}));

export default useBasketStore;

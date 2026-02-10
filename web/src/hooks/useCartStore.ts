import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '@/data/products';

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    isCartOpen: boolean;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isCartOpen: false,

            toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

            addItem: (product, quantity = 1) => {
                const { items } = get();
                const existingItem = items.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                        isCartOpen: true, // Open cart when adding
                    });
                } else {
                    set({
                        items: [...items, { ...product, quantity }],
                        isCartOpen: true,
                    });
                }
            },

            removeItem: (productId) => {
                set({
                    items: get().items.filter((item) => item.id !== productId),
                });
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                });
            },

            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'zda-cart-storage',
            partialize: (state) => ({ items: state.items }), // Only persist items
        }
    )
);

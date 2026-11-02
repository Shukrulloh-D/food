import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (dish) => {
        const { items } = get();
        const existing = items.find((i) => i.id === dish.id);
        
        if (existing) {
          set({
            items: items.map((i) =>
              i.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...dish, quantity: 1 }] });
        }
      },
      removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    { name: 'food-cart-storage' }
  )
);
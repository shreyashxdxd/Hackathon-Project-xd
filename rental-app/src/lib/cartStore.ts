import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RentalItem } from './itemStore';

export interface CartItem {
  id: string; // unique for the cart line item
  item: RentalItem;
  pricingType: 'hourly' | 'daily' | 'weekly';
  price: number;
  duration: number; // e.g., 2 days, 3 hours
}

interface CartStore {
  items: CartItem[];
  addItem: (item: RentalItem, pricingType: 'hourly' | 'daily' | 'weekly', price: number) => void;
  removeItem: (id: string) => void;
  updateDuration: (id: string, newDuration: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, pricingType, price) => {
        set((state) => {
          // Check if same item + same pricing already in cart
          const existing = state.items.find((i) => i.item.id === item.id && i.pricingType === pricingType);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === existing.id ? { ...i, duration: i.duration + 1 } : i
              ),
            };
          }
          // Otherwise add new line item
          return {
            items: [
              ...state.items,
              {
                id: `${item.id}-${pricingType}-${Date.now()}`,
                item,
                pricingType,
                price,
                duration: 1,
              },
            ],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateDuration: (id, newDuration) => {
        if (newDuration < 1) return;
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, duration: newDuration } : i)),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, i) => total + i.price * i.duration, 0);
      },
    }),
    {
      name: 'rentit-cart-storage',
    }
  )
);

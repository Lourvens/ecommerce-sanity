import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../../../sanity.types";

interface BasketItem extends Product {
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  getItemCount: (productId: string) => number;
  decrementItem: (productId: string) => void;
  getTotalQuantity: () => number;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: Product) =>
        set((state) => {
          const existingItem = state.items.find((i) => i._id === item._id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { quantity: 1, ...item }] };
        }),
      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== id),
        })),

      clearBasket: () => set({ items: [] }),
      getItemCount: (productId: string) => {
        const itemsCount =
          get().items.find((i) => i._id === productId)?.quantity || 0;
        return itemsCount;
      },
      decrementItem: (productId: string) => {
        const existingItem = get().items.find((i) => i._id === productId);

        if (existingItem && existingItem.quantity > 1) {
          set((state) => ({
            items: state.items.map((i) =>
              i._id === productId ? { ...i, quantity: i.quantity - 1 } : i
            ),
          }));
        } else {
          set((state) => ({
            items: state.items.filter((item) => item._id !== productId),
          }));
        }
      },
      getTotalQuantity: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "basket-storage", // unique name
    }
  )
);

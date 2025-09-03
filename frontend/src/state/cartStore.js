// src/state/cartStore.js

import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  // State: An array to hold the product items in the cart
  items: [],

  // Actions: Functions that modify the state

  /**
   * Adds a product to the cart.
   * If the product is already in the cart, it increments the quantity.
   * If not, it adds the product with a quantity of 1.
   */
  addToCart: (product) => {
    const { items } = get(); // Get the current items array
    const itemInCart = items.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item exists, update its quantity
      const updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedItems });
    } else {
      // If item doesn't exist, add it to the cart with quantity 1
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },

  /**
   * Removes a product completely from the cart.
   */
  removeFromCart: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) });
  },

  /**
   * Updates the quantity of a specific item in the cart.
   * If quantity reaches 0, the item is removed.
   */
  updateQuantity: (productId, quantity) => {
    if (quantity < 1) {
      get().removeFromCart(productId);
    } else {
      const updatedItems = get().items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      set({ items: updatedItems });
    }
  },

  /**
   * Clears all items from the cart.
   */
  clearCart: () => {
    set({ items: [] });
  },
}));

export default useCartStore;
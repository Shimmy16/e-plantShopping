// CartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If it exists, increment the quantity
        existingItem.quantity++;
      } else {
        // If it doesn't exist, add the new item to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      // Filter out the item with the specified name
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item to update
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Update the quantity of the item
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default for use in store
export default CartSlice.reducer;

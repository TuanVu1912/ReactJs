import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItem;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItem) =>
  cartItem.reduce((count, item) => count + item.quantity, 0)
);
// caculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItem) =>
  cartItem.reduce((total, item) => total + item.quantity * item.product.salePrice, 0)
);

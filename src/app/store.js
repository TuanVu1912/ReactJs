import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/CartSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  count: counterReducer,
  cart: cartReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;

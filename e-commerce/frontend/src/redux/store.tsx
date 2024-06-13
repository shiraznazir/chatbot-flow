import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";
import addressSlice from "./reducers/addressSlice";
import orderSlice from "./reducers/orderSlice";
import homeSlice from "./reducers/homeSlice";
import { myCustomApiService } from "./customApi";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    cart: cartSlice,
    user: userSlice,
    address: addressSlice,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

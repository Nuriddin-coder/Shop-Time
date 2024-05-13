import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { productReducerSlice } from "./reducers/product-reducer";
import { saveState } from "@/lib/storage";
import {
  totalPrice,
  addProduct,
  removeProduct,
  toggleAmount,
} from "./reducers/product-reducer";
import { wishlistReducerSlice } from "./reducers/wishlist-reducer";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProduct, toggleAmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
  },
});

export const store = configureStore({
  reducer: {
    productData: productReducerSlice,
    wishlistData: wishlistReducerSlice,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productData);
  saveState("wishlist", store.getState().wishlistData);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

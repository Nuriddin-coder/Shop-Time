import { loadState } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WishPropsTypes {
  attribute_value: number[];
  id: number;
  images: {
    image: string;
    image_id: number;
  }[];
  is_available: boolean;
  other_detail: string | null;
  price: string;
  price_with_discount: null;
  product: number;
  quantity: number;
  title: string;
  userCount: number;
  userPrice: number;
}

interface wishlistStateType {
  wishlist: WishPropsTypes[];
}

const initialState: wishlistStateType = loadState("wishlist") || {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addWishlist: (
      state: wishlistStateType,
      action: PayloadAction<WishPropsTypes>,
    ) => {
      const idf = state.wishlist?.find((i) => i.id === action.payload.id);

      if (!idf) {
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload }],
        };
      }
    },
    removeWishlist: (
      state: wishlistStateType,
      action: PayloadAction<{ id: number }>,
    ) => {
      const result = state.wishlist.filter((i) => i.id !== action.payload.id);

      return { ...state, wishlist: result };
    },
  },
});

export const wishlistReducerSlice = wishlistSlice.reducer;

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

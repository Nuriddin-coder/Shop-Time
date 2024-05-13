"use client";
import { loadState } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductVariantType } from "@/service/types";

interface PropsTypes {
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

interface StateProps {
  products: PropsTypes[];
  count: number;
  totalPrice: number;
}

const initialState: StateProps = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //@ts-ignore
    addProduct: (
      state: StateProps,
      action: PayloadAction<ProductVariantType>,
    ) => {
      const idf = state.products?.find((i) => i.id === action.payload.id);

      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: parseInt(action.payload.price),
            },
          ],
        };
      }
    },

    removeProduct: (
      state: StateProps,
      action: PayloadAction<{ id: number }>,
    ) => {
      const newProducts = state.products.filter(
        (i) => i.id !== action.payload.id,
      );

      return { ...state, products: newProducts };
    },

    toggleAmount: (
      state: StateProps,
      action: PayloadAction<{ type: string; id: number }>,
    ) => {
      if (action.payload.type === "inc") {
        console.log(state.products);

        const tempProducts = state.products.map((item) => {
          const price = Number(item.price);

          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount && item.userCount + 1,
              userPrice: (item.userCount + 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: tempProducts };
      }
      if (action.payload.type === "dec") {
        const tempProducts = state.products.map((item) => {
          const price = Number(item.price);

          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount && item.userCount - 1,
              userPrice: (item.userCount - 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: tempProducts };
      }
    },

    setCount: (state: StateProps) => {
      return {
        ...state,
        count: state.products.length,
      };
    },

    totalPrice: (state: StateProps) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export const productReducerSlice = productSlice.reducer;

export const { addProduct, removeProduct, toggleAmount, totalPrice, setCount } =
  productSlice.actions;

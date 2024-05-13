"use client";
import { AddBagIcon } from "@/assets/icons/add-bag-icon";
import { HeartIconSmall } from "@/assets/icons/heart-icon-small";
import React from "react";
import { useDispatch } from "react-redux";
import { addWishlist } from "@/redux/reducers/wishlist-reducer";
import { removeWishlist } from "@/redux/reducers/wishlist-reducer";
import { DeleteItemIcon } from "@/assets/icons/delete-item-icon";
import { removeProduct } from "@/redux/reducers/product-reducer";
import { addProduct } from "@/redux/reducers/product-reducer";
import { ProductVariantType } from "@/service/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ActiveHeartSmallIcon } from "@/assets/icons/active-heart-small-icon";
import { AppDispatch } from "@/redux/store";

interface addType {
  addData?: ProductVariantType;
}
export const Add: React.FC<addType> = (addData) => {
  const id = addData.addData?.id;
  const dispatch = useDispatch<AppDispatch>();

  const [changeWishlist, setChangeWishlist] = React.useState(false);
  const [changeProduct, setChangeProduct] = React.useState(false);

  const { wishlist } = useSelector((state: RootState) => state.wishlistData);
  const { products } = useSelector((state: RootState) => state.productData);

  React.useEffect(() => {
    setChangeWishlist(wishlist.some((i) => i.id === id));
    setChangeProduct(products.some((i) => i.id === id));
  });

  const addWishlisFn = () => {
    dispatch(addWishlist(addData.addData!));
  };

  const removeWishlisFn = () => {
    dispatch(removeWishlist({ id: addData.addData!.id }));
  };

  const addProductFn = () => {
    dispatch(addProduct(addData.addData!));
  };

  const removeProductFn = () => {
    dispatch(removeProduct({ id }));
  };
  

  return (
    <div className="mt-4 flex items-center gap-4 pl-2 tablet:py-3">
      {changeWishlist ? (
        <button
          onClick={removeWishlisFn}
          className=" flex items-center gap-2 rounded-lg border border-Third px-2 py-1 text-Third"
        >
          <ActiveHeartSmallIcon />
          remove
        </button>
      ) : (
        <button
          onClick={addWishlisFn}
          className="  flex items-center gap-2 rounded-lg border border-Third px-2 py-1 text-Third"
        >
          <HeartIconSmall />
          wishlist
        </button>
      )}

      {changeProduct ? (
        <button
          onClick={removeProductFn}
          className="flex items-center gap-2 rounded-lg border border-Third px-2 py-1 text-Third"
        >
          <DeleteItemIcon /> remove
        </button>
      ) : (
        <button
          onClick={addProductFn}
          className="flex items-center gap-2 rounded-lg border border-Third px-2 py-1 text-Third"
        >
          <AddBagIcon /> basket
        </button>
      )}
    </div>
  );
};
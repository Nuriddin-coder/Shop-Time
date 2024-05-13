"use client";
import React from "react";

//// Import Redux :
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/reducers/product-reducer";
import { removeWishlist } from "@/redux/reducers/wishlist-reducer";
import { removeProduct } from "@/redux/reducers/product-reducer";
import { AppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";

//// Import Types :
import { ProductVariantType } from "@/service/types";

//// Import Icons :
import { AddBagIcon } from "@/assets/icons/add-bag-icon";
import { DeleteItemIcon } from "@/assets/icons/delete-item-icon";

export const WishlistCard = (props: ProductVariantType) => {
  const ids = props.id;
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector((state: RootState) => state.productData);
  const { wishlist } = useSelector((state: RootState) => state.wishlistData);

  const [addWish, setAddWish] = React.useState(false);

  React.useEffect(() => {
    setAddWish(products.some((id) => id.id === ids));
  }, [ids, products]);

  const addWishToBasket = () => {
    dispatch(addProduct(props));
  };

  const removeWish = () => {
    dispatch(removeWishlist({ id: ids }));
  };

  const removeWishToCart = () => {
    dispatch(removeProduct({ id: ids }));
  };

  return (
    <div className="mt-2 flex max-w-[550px] gap-[30px] rounded-xl border border-Secondary py-3 pl-3 shadow-md tablet:w-[590px]">
      <img
        className="h-[80px] w-[110px] rounded-lg mobileSecond:h-[120px] mobileSecond:w-[150px] tablet:h-[150px] tablet:w-[200px] desktop:h-[180px] desktop:w-[230px]"
        src={props.images[0].image}
        alt="img"
      />
      <div>
        {/* Title For Mobile */}
        <h1 className="mb-1 text-[14px] text-Secondary mobileSecond:hidden">
          {props.title.slice(0, 19)}...
        </h1>

        {/* Title For Tablet and Desktop */}
        <h1 className="mb-1 hidden text-[14px] text-Secondary mobileSecond:inline-block mobileSecond:text-[18px] tablet:text-[20px]  tablet:font-semibold">
          {props.title}
        </h1>
        <p className="font-medium text-Secondary tablet:pb-3 tablet:text-[18px] tablet:font-semibold">
          $ {props.price}
        </p>
        <div className="mt-2 flex items-center gap-2">
          {addWish ? (
            <button
              onClick={removeWishToCart}
              className="flex items-center gap-2 rounded-lg border border-Primary px-2 py-[4px] text-Primary hover:shadow-md"
            >
              Remove
              <DeleteItemIcon />
            </button>
          ) : (
            <button
              onClick={addWishToBasket}
              className="flex items-center gap-2 rounded-lg border border-Primary px-2 py-[4px] text-Primary hover:shadow-md"
            >
              Add
              <AddBagIcon />
            </button>
          )}

          <button
            onClick={removeWish}
            className="rounded-lg border border-Primary px-2 py-1 hover:shadow-md"
          >
            <DeleteItemIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

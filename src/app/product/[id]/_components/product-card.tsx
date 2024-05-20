"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "@/redux/reducers/product-reducer";
import { addWishlist, removeWishlist } from "@/redux/reducers/wishlist-reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//// Import Icons :
import { HeartIconSmall } from "@/assets/icons/heart-icon-small";
import { DeleteItemIcon } from "@/assets/icons/delete-item-icon";
import { AddBagIcon } from "@/assets/icons/add-bag-icon";
import { EyeIcon } from "@/assets/icons/eye-icon";
import { ActiveHeartSmallIcon } from "@/assets/icons/active-heart-small-icon";
import { ProductVariantType } from "@/service/types";

export const ProductCard: React.FC<ProductVariantType> = (props) => {
  const id = props.id;

  const [changeBasketValue, setChangeBasketValue] = React.useState(false);
  const [changeWishlistValue, setChangeWishlistValue] = React.useState(false);

  const { products } = useSelector((state: RootState) => state.productData);
  const { wishlist } = useSelector((state: RootState) => state.wishlistData);

  React.useEffect(() => {
    setChangeBasketValue(products.some((i) => i.id === id));
    setChangeWishlistValue(wishlist.some((i) => i.id === id));
  }, [products, id, wishlist]);

  const dispatch = useDispatch<AppDispatch>();
  const addProductFn = () => {
    dispatch(addProduct(props));

    withReactContent(Swal).fire({
      icon: "success",
      title: "Product Added",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  const removeProductFn = () => {
    dispatch(removeProduct({ id }));
    withReactContent(Swal).fire({
      icon: "info",
      title: "Product Deleted",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  const addWishlistFn = () => {
    dispatch(addWishlist(props));

    withReactContent(Swal).fire({
      icon: "success",
      title: "Product Added to Wishlist",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  const removeWishlistFn = () => {
    dispatch(removeWishlist({ id }));

    withReactContent(Swal).fire({
      icon: "info",
      title: "Product Deleted to Wishlist",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  return (
    <div className="group relative max-w-[260px] overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:shadow-none  tablet:hover:scale-110">
      <div className="group relative flex bg-white p-2 shadow-xl transition-all duration-300 tablet:h-[280px] tablet:max-w-[260px]">
        <span className="absolute left-[-24px] top-[-24px] z-0 h-[30px] w-[30px] rounded-full bg-Primary transition-all duration-300 tablet:group-hover:scale-[21.2] desktop:group-hover:scale-[22.7]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <img
            className="mt-3 h-[120px] w-[220px] rounded-lg bg-white p-1 tablet:h-[160px] tablet:group-hover:hidden"
            src={props?.images[0]?.image}
            alt="img"
          />
          <img
            className="mt-3 hidden h-[120px] w-[220px] rounded-lg bg-white p-1 tablet:h-[160px] tablet:group-hover:block"
            src={props?.images[1]?.image}
            alt="img"
          />
          <h1 className="pb-3 pt-1 text-center text-[14px] tablet:pt-3.5 tablet:text-[16px] tablet:group-hover:text-white desktop:text-[18px]">
            {props?.title.slice(0, 10)}...
          </h1>

          <p className="pl-[10px] text-[14px] font-bold text-Secondary tablet:pt-2 tablet:text-[16px] tablet:group-hover:text-white desktop:pt-1">
            $ {props.price}
          </p>

          {/* Button Add Basket */}
          {changeBasketValue ? (
            <button
              onClick={removeProductFn}
              className="absolute bottom-0 right-[2px] duration-200 hover:scale-110 tablet:bottom-[1px] tablet:right-[1px] desktop:right-[-12px]"
            >
              <DeleteItemIcon />
            </button>
          ) : (
            <button
              onClick={addProductFn}
              className="absolute bottom-0 right-[2px] duration-200 hover:scale-110 tablet:bottom-[1px] tablet:right-[1px] desktop:right-[-12px]"
            >
              <AddBagIcon />
            </button>
          )}
        </div>

        <div className="group-hover:inline-block tablet:hidden">
          {/* Button Heart */}
          {changeWishlistValue ? (
            <button
              onClick={removeWishlistFn}
              className="absolute right-[5px] z-40 rounded-lg bg-MainBg px-1.5 py-1.5 tablet:right-[5px] tablet:top-[18%] tablet:hover:-translate-x-[1px]"
            >
              <ActiveHeartSmallIcon />
            </button>
          ) : (
            <button
              onClick={addWishlistFn}
              className="absolute right-[5px] z-40 rounded-lg bg-MainBg px-1.5 py-1.5 tablet:right-[5px] tablet:top-[18%] tablet:hover:-translate-x-[1px]"
            >
              <HeartIconSmall />
            </button>
          )}

          {/* Button Eye */}
          <Link href={`/productDetail/${props.id}`}>
            <div className="absolute right-[5px] top-[21%] z-40 rounded-lg bg-MainBg p-1.5 px-[6px] hover:-translate-x-[1px] tablet:right-[5px] tablet:top-[5%]">
              <EyeIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

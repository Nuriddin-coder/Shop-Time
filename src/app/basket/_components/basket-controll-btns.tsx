import React from "react";
import { ProductVariantType } from "@/service/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addWishlist } from "@/redux/reducers/wishlist-reducer";
import { removeWishlist } from "@/redux/reducers/wishlist-reducer";
import { removeProduct } from "@/redux/reducers/product-reducer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//// Import Icons :
import { HeartIconSmall } from "@/assets/icons/heart-icon-small";
import { DeleteItemIcon } from "@/assets/icons/delete-item-icon";
import { ActiveHeartSmallIcon } from "@/assets/icons/active-heart-small-icon";

export const BasketControllBtns = (props: ProductVariantType) => {
  const [wish, setWish] = React.useState(false);
  const { wishlist } = useSelector((state: RootState) => state.wishlistData);
  const dispatch = useDispatch<AppDispatch>();
  const wishId = props.id;

  React.useEffect(() => {
    setWish(wishlist.some((i) => i.id === wishId));
  }, [wishlist, wishId]);

  const addProductToWishlist = () => {
    dispatch(addWishlist(props));
    withReactContent(Swal).fire({
      icon: "success",
      title: "Product Added to Wishlist",
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  const removeProductToWishlist = () => {
    dispatch(removeWishlist({ id: wishId }));

    withReactContent(Swal).fire({
      icon: "info",
      title: "Product Deleted to Wishlist",
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  const removeProductToBasket = () => {
    dispatch(removeProduct({ id: props.id }));

    withReactContent(Swal).fire({
      icon: "info",
      title: "Product Deleted to Basket",
      toast: true,
      position: "top-right",
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
    <div>
      <div className="mt-4 flex items-center gap-2">
        {wish ? (
          <button
            onClick={removeProductToWishlist}
            className="flex items-center gap-2 rounded-lg border border-Primary px-2 py-1 hover:shadow-md"
          >
            <ActiveHeartSmallIcon /> Remove
          </button>
        ) : (
          <button
            onClick={addProductToWishlist}
            className="flex items-center gap-2 rounded-lg border border-Primary px-2 py-1 hover:shadow-md"
          >
            <HeartIconSmall /> Add
          </button>
        )}

        <button
          onClick={removeProductToBasket}
          className="flex items-center gap-2 rounded-lg border border-Primary px-2 py-1 hover:shadow-md"
        >
          <DeleteItemIcon />
        </button>
      </div>
    </div>
  );
};

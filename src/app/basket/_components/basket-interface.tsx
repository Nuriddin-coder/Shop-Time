"use client";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { removeProduct } from "@/redux/reducers/product-reducer";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { BasketControllBtns } from "./basket-controll-btns";
import { Calculate } from "./calculate";

const BasketInterface = () => {
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.productData,
  );

  const session = useSession();
  const dispatch = useDispatch<AppDispatch>();

  const removeProductToBasket = (id: number) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className="gap-[150px] desktop:flex">
      {products.length ? (
        <div>
          {products?.map((i) => (
            <div
              key={i.id}
              className="mb-3 items-center justify-start gap-[50px] border-b border-Secondary pb-3 tablet:flex desktop:w-[800px]"
            >
              <img
                className="mx-auto h-[170px] w-[270px] rounded-lg mobileSecond:h-[200px] mobileSecond:w-[320px] tablet:m-0 tablet:h-[150px] tablet:w-[250px] desktop:h-[180px] desktop:w-[290px]"
                src={i.images[0].image}
                alt="img"
              />
              <div className="tablet:mb-2">
                <h1 className="mt-4 font-medium text-Secondary">{i.title}</h1>

                <p className="pt-1 font-medium text-Secondary">
                  Price:{" "}
                  <span className="ml-2 font-semibold text-black">
                    $ {i.price}
                  </span>
                </p>

                <p className="pt-1 font-medium text-Secondary">
                  Quantity:{" "}
                  <span className="ml-2 font-semibold text-black">
                    {i.quantity}
                  </span>
                </p>

                {/* Calcing Product */}
                <Calculate key={i.id} {...i} />

                <BasketControllBtns key={i.id} {...i} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="mx-auto max-w-[240px] py-4 text-[22px] font-semibold text-black desktop:max-w-[320px] desktop:pt-[100px] desktop:text-[28px]">
          !Ooops No Product Yet
        </h1>
      )}

      <div className="mt-6 pl-2">
        <p className="mt-2 font-medium text-Secondary desktop:text-[18px]">
          Product:
          <span className="ml-2 font-bold text-black desktop:text-[18px]">
            {products.length}
          </span>
        </p>
        <h1 className="font-medium text-Secondary desktop:text-[18px]">
          Total Price:
          <span className="ml-2 font-bold text-black desktop:text-[18px]">
            $ {totalPrice}
          </span>
        </h1>

        {session.status === "authenticated" ? (
          <button className="mt-2 rounded-lg bg-Primary px-[40px] py-2 text-white desktop:mt-4">
            Buy Now
          </button>
        ) : (
          <button className="bg-ClrDisable mt-2 rounded-lg px-[40px] py-2 text-Secondary desktop:mt-4">
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketInterface;

"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const OrderList = () => {
  const { products } = useSelector((state: RootState) => state.productData);
  return (
    <div className="mr-[50px] py-5">
      <h1 className=" text-[18px] font-medium desktop:text-[22px]">
        Ordering Product :
      </h1>
      {products.map((item) => (
        <div className="mt-3 flex w-[300px] gap-4 border-b-2 border-Secondary pb-3 tablet:w-[450px] desktop:max-w-[550px]">
          <img
            className="h-[80px] w-[120px] rounded-lg tablet:h-[90px] tablet:w-[150px] desktop:h-[100px] desktop:w-[160px]"
            src={item.images[0].image}
            alt="img"
          />
          <div>
            <h1 className="text-[14px] text-Secondary tablet:text-[16px] desktop:text-[20px]">
              {item.title.slice(0, 19)}...
            </h1>
            <p className="text-[14px] font-semibold desktop:text-[16px]">
              $ {parseInt(item.price)}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-semibold desktop:text-[16px]">
                {item.userCount}
              </p>
              <span>X</span>
              <p className="text-[14px] font-semibold desktop:text-[16px]">
                $ {item.userPrice}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;

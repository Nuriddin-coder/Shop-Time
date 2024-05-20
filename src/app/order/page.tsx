import React from "react";
import { OrderForm } from "./_components/order-form";
import { OrderBtn } from "./_components/order-btn";
import dynamic from "next/dynamic";

const OrderList = dynamic(() => import("./_components/order-list"), {
  ssr: false,
});

const OrderPage = () => {
  return (
    <div className="container tablet:py-4">
      <div className="justify-between gap-[100px]  desktop:flex">
        <OrderForm />
        <OrderList />
      </div>
      <div>
        <OrderBtn />
      </div>
    </div>
  );
};

export default OrderPage;

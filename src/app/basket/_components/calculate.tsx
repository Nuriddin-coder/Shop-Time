"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleAmount } from "@/redux/reducers/product-reducer";
import { ProductVariantType } from "@/service/types";

export const Calculate = (props: ProductVariantType) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(true);
  const incrementFn = () => {
    if (props.userCount < props.quantity) {
      dispatch(toggleAmount({ type: "inc", id: props.id }));
    } else {
      setShow(true);
    }
  };

  const decrementFn = () => {
    if (props.userCount > 1) {
      dispatch(toggleAmount({ type: "dec", id: props.id }));
    }
  };

  return (
    <div>
      <div className="mt-3 flex w-[250px] items-center gap-4 rounded-lg border border-Secondary py-1 pl-[20px] shadow-md ">
        <div className="flex items-center gap-3">
          <button
            disabled={props.userCount < 2}
            onClick={decrementFn}
            className="w-[35px] rounded-lg bg-Primary pb-[2px] text-white disabled:cursor-not-allowed disabled:opacity-55"
          >
            -
          </button>
          <p className="font-medium text-Secondary">{props.userCount}</p>
          <button
            disabled={props.userCount === props.quantity}
            onClick={incrementFn}
            className="w-[35px] rounded-lg bg-Primary pb-[2px] text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            +
          </button>
        </div>

        <p className="my-2 pl-2 font-bold text-Secondary">
          $ {props.userPrice}
        </p>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { cleareProduct } from "@/redux/reducers/product-reducer";
import Swal from "sweetalert2";

export const OrderBtn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const confirmOrderBtn = () => {
    dispatch(cleareProduct());
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your order has been placed successfully",
      showConfirmButton: false,
      timer: 2500,
    });
    router.replace("/");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mb-4 mt-2 rounded-lg bg-Primary px-[40px] py-2 text-white desktop:mt-4">
          Order Now
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] rounded-lg bg-ClrF4F5">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-Secondary">
            Are you sure ordering products ?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={confirmOrderBtn}
              className="rounded-lg bg-Primary px-4 py-2 text-white"
            >
              Yes
            </button>
            <AlertDialogCancel className="mb-[8px] rounded-lg bg-Primary px-4 py-2 text-white hover:bg-Primary hover:text-white">
              No
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export const ModalForBuy = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mt-2 rounded-lg bg-ClrDisable px-[40px] py-2 text-Secondary desktop:mt-4">
          Buy Now
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] rounded-lg bg-ClrF4F5">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-Secondary">
            You need to signUp or not have product
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/signIn"
              className="rounded-lg bg-Primary px-4 py-2 text-white"
            >
              SignIn
            </Link>
            <Link
              href="/signUp"
              className="rounded-lg bg-Primary px-4 py-2 text-white"
            >
              SignUp
            </Link>
          </div>
        </AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

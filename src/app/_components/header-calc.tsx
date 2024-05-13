"use client";
import React from "react";
import Link from "next/link";
import { ProfileButton } from "./profile-navigate";
import { HeartIcons } from "@/assets/icons/heart-icon";
import { BagIcon } from "@/assets/icons/bag-icon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ActiveHeartIcon } from "@/assets/icons/active-heart-icon";

export default function HeaderCalc() {
  const { products } = useSelector((state: RootState) => state.productData);
  const { wishlist } = useSelector((state: RootState) => state.wishlistData);

  return (
    <div className="flex items-center gap-5 tablet:gap-8">
      {/* Profile Icon for tablet */}
      <div className="hidden tablet:inline-block">
        <ProfileButton />
      </div>

      <Link href="/wishlist" className="tablet:mb-1">
        {wishlist.length ? <ActiveHeartIcon /> : <HeartIcons />}
      </Link>

      {/* Basket icon */}
      <Link href="/basket" className="relative mb-1">
        <BagIcon />
        <span className="absolute right-[-8px] top-[-5px] h-[18px] w-[18px] rounded-full bg-blue-400 pl-[5.5px] pt-[0.8px] text-[12px] text-white">
          {products.length}
        </span>
      </Link>
    </div>
  );
}

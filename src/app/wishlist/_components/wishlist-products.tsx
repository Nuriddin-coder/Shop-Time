"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

//// Import Icons :
import { WishlistCard } from "./wishlist-card";
import { Heading1 } from "lucide-react";

const WishlistProducts = () => {
  const { wishlist } = useSelector((state: RootState) => state.wishlistData);

  return (
    <div>
      {wishlist.length ? (
        <div className="flex-wrap items-center gap-x-[70px] gap-y-4 pb-8 pt-2 tablet:flex tablet:pt-4">
          {wishlist.map((wish) => (
            <div className="py-1 tablet:p-0">
              <WishlistCard key={wish.id} {...wish} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="mx-auto mt-[50px] max-w-[240px] text-[24px] font-semibold text-Secondary">
          !Ooops No Data Yet
        </h1>
      )}
    </div>
  );
};

export default WishlistProducts;

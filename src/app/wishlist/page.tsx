import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import React from "react";
import { LoadingSpinner } from "../_components/loading-spinner";

const WishlistProducts = dynamic(
  () => import("./_components/wishlist-products"),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  },
);

const wishlistPage = () => {
  return (
    <div className="container">
      <h1 className="pt-2 text-[22px] font-medium text-Secondary">
        Your Wishlist :
      </h1>
      <WishlistProducts />
    </div>
  );
};

export default wishlistPage;

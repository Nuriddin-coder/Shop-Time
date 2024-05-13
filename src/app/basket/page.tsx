import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { LoadingSpinner } from "../_components/loading-spinner";

const BasketInterface = dynamic(
  () => import("./_components/basket-interface"),
  { ssr: false },
);

const BasketPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container py-4">
        <BasketInterface />
      </div>
    </Suspense>
  );
};

export default BasketPage;

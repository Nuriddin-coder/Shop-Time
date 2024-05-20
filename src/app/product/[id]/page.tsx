import React, { Suspense } from "react";
import { ProductClientPage } from "./_components/product-client-page";
import { LoadingSpinner } from "@/app/_components/loading-spinner";

const ProductsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <ProductClientPage paramsId={params.id} />
    </div>
  );
};

export default ProductsPage;

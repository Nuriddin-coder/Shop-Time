import React, { Suspense } from "react";
import { getProduct } from "@/service/getFetching";
import { ProductCard } from "./_components/product-card";
import { LoadingSpinner } from "@/app/_components/loading-spinner";

const ProductsPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const productData = await getProduct(Number(id));
  return (
    <div className="container">
      <div className="mt-8 grid grid-cols-columnForMobile gap-2 pb-[30px] tablet:grid-cols-columnForDesktop tablet:gap-7">
        <Suspense fallback={<LoadingSpinner />}>
          {productData?.results.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;

"use client";
import React, { Suspense } from "react";
import { ProductType } from "@/service/types";
import { LoadingSpinner } from "@/app/_components/loading-spinner";
import { ProductCard } from "./product-card";

export const ProductClientPage = ({ paramsId }: { paramsId: string }) => {
  const [data, setData] = React.useState<ProductType | null>(null);
  const [pageNum, setPageNum] = React.useState<number>(1);

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          `http://135.181.108.207/product_variant/?product__category=${paramsId}&limit=8&offset=${8 * (pageNum - 1)}`,
          {
            next: { revalidate: 60 },
          },
        );
        const datas: ProductType = await res.json();
        setData(datas);
      };
      fetchData();
    } catch (error: string | any) {
      throw new Error(error.message);
    }
  }, [paramsId, pageNum]);

  const calcCount = Array(Math.ceil(data?.count ? data.count / 8 : 1)).fill(
    null,
  );

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mt-8 grid grid-cols-columnForMobile gap-4 pb-[50px] tablet:grid-cols-columnForDesktop tablet:gap-7 desktop:gap-x-[69px]">
          {data?.results.map((item) => <ProductCard key={item.id} {...item} />)}
        </div>
      </Suspense>
      <div className="flex justify-center gap-3 pb-6">
        {calcCount.map((_, index) => {
          let num = index + 1;
          return (
            <button
              onClick={() => setPageNum(index + 1)}
              key={index}
              className={`rounded-lg px-3 py-1 ${pageNum === num ? "bg-Primary text-white" : "bg-white text-Secondary hover:text-Primary hover:shadow-md"}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

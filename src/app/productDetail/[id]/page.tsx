import React, { Suspense } from "react";
import { getProductVariant } from "@/service/getFetching";

/// Import Components:
import { DetailBreadCrumb } from "./_components/detail-bread-crumb";
import ImgSwiper from "./_components/img-swiper";
import { Add } from "./_components/add";
import { LoadingSpinner } from "@/app/_components/loading-spinner";

const ProductDetailPage = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const variantData = await getProductVariant(id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container">
        <div className="my-5">
          <DetailBreadCrumb variantBreadData={variantData} />
        </div>
        <div className=" gap-[80px] pb-[80px] desktop:flex">
          {/* Img Detail for mobile and tablet  */}
          <span className="desktop:hidden">
            <ImgSwiper key={variantData?.id} imgData={variantData} />
          </span>

          {/* Imgs fro Desktop*/}
          <div className="mt-[32px] hidden w-[560px] flex-wrap justify-center gap-6 desktop:flex">
            {variantData?.images.map((imgs) => (
              <img
                className="h-[200px] w-[250px] rounded-xl"
                key={imgs.image_id}
                src={imgs.image}
                alt="imgs"
              />
            ))}
          </div>

          <div className="mt-[20px]">
            {/* Titlex */}
            <h1 className="mt-6 pl-2 text-[22px] font-semibold text-Secondary tablet:text-[26px]">
              {variantData?.title}
            </h1>

            {/* Price */}
            <p className="my-2 pl-2 font-bold text-Secondary tablet:text-[18px]">
              $ {variantData?.price}
            </p>

            {/* Quantity */}
            <p className="pl-2 text-Secondary tablet:text-[18px]">
              Quantity:{" "}
              <span className="font-bold tablet:ml-2">
                {variantData?.quantity}
              </span>
            </p>

            {/* Description: */}
            <div>
              <p className="mt-4 pl-2 text-[18px] font-semibold text-Secondary tablet:mt-2">
                Description:
              </p>
              <div
                className="pl-2 text-Secondary tablet:max-w-[650px]"
                dangerouslySetInnerHTML={{
                  __html: variantData?.other_detail ?? "",
                }}
              ></div>
            </div>

            {/* wishlist and add Basket Buttons */}
            <Add key={variantData?.id} addData={variantData} />

            <div className="mx-auto mt-6 w-[200px] rounded-lg bg-Secondary text-center desktop:mx-0 desktop:ml-2">
              <button className="py-2.5 text-[18px] text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductDetailPage;

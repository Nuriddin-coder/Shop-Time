import React from "react";
import { getBanner } from "@/service/getFetching";
import { getSubCategory } from "@/service/getFetching";
import BannerMain from "./_routes/banner-main";
import { SubCategory } from "./_routes/sub-category";
import { getProductVariantAll } from "@/service/getFetching";
import { getBrand } from "@/service/getFetching";

//// Import Img:
import AirPods from "@/assets/imgs/airpods-pro.jpg";
import TV from "@/assets/imgs/TV.webp";
import WashingMachine from "@/assets/imgs/washing-machine.jpg";
import Phone from "@/assets/imgs/phone.jpg";
import Playstation from "@/assets/imgs/playstation.webp";
import { ProductsMain } from "./_components/products-main";
import { Brand } from "./_components/brand";

export default async function Home() {
  const [data, subCategoryData, productAll, brandDatas] = await Promise.all([
    getBanner(),
    getSubCategory(),
    getProductVariantAll(),
    getBrand(),
  ]);

  return (
    <div>
      {/* Banner Section */}
      <section>
        <div className="pt-7">
          <BannerMain datas={data} />
        </div>
      </section>

      {/* SubCategory Section */}
      <section>
        <div className="container mt-[40px] py-[80px]">
          <SubCategory subData={subCategoryData} />
        </div>
      </section>

      <section className="container">
        <h1 className="pb-4 pt-8 text-[22px] font-bold text-Secondary desktop:text-[28px]">
          Sale Products :
        </h1>
        <div className=" flex flex-col items-center gap-y-4 pb-10 tablet:flex-row tablet:justify-center tablet:gap-x-[60px] desktop:items-center desktop:gap-0">
          <div>
            <img
              className="h-[200px] w-[350px] cursor-pointer rounded-2xl duration-300 hover:scale-105 mobileSecond:h-[270px] mobileSecond:w-[450px] tablet:h-[400px] tablet:w-[450px] desktop:mt-[12px] desktop:h-[475px] desktop:w-[1000px]"
              src={AirPods.src}
              alt="img"
            />
          </div>
          <div className="flex-wrap items-end justify-end gap-x-4 desktop:flex">
            <img
              className="h-[200px] w-[350px] cursor-pointer rounded-2xl duration-500 hover:rotate-1 hover:scale-105 mobileSecond:h-[270px] mobileSecond:w-[450px] tablet:h-[230px] tablet:w-[400px]"
              src={TV.src}
              alt="TV"
            />
            <img
              className="mt-4 h-[200px] w-[350px] cursor-pointer rounded-2xl duration-500 hover:-rotate-1 hover:scale-105 mobileSecond:h-[270px] mobileSecond:w-[450px] tablet:h-[230px] tablet:w-[400px]"
              src={WashingMachine.src}
              alt="TV"
            />
            <img
              className="hidden h-[200px] w-[350px] cursor-pointer rounded-2xl duration-500 hover:rotate-1 hover:scale-105 mobileSecond:h-[270px] mobileSecond:w-[450px] tablet:h-[230px] tablet:w-[400px] desktop:inline-block"
              src={Phone.src}
              alt="TV"
            />
            <img
              className="mt-4 hidden h-[200px] w-[350px] cursor-pointer rounded-2xl duration-500 hover:-rotate-1 hover:scale-105 mobileSecond:h-[270px] mobileSecond:w-[450px] tablet:h-[230px] tablet:w-[400px] desktop:inline-block"
              src={Playstation.src}
              alt="TV"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-[40px] py-[40px]">
          <h1 className="pb-[80px] text-[22px] font-bold text-Secondary desktop:text-[28px]">
            Popular Products :
          </h1>
          <ProductsMain productData={productAll} />
        </div>
      </section>

      <section>
        <div className="container  py-[40px]">
          <h1 className="pb-[30px] text-[22px] font-bold text-Secondary desktop:text-[28px]">
            Brands :
          </h1>
          <Brand brandData={brandDatas} />
        </div>
      </section>
    </div>
  );
}

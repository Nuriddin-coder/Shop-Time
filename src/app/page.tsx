import React from "react";
import { getBanner } from "@/service/getFetching";
import { getSubCategory } from "@/service/getFetching";
import BannerMain from "./_routes/banner-main";
import { SubCategory } from "./_routes/sub-category";
import { TopIcon } from "@/assets/icons/top-icon";
import Link from "next/link";

export default async function Home() {
  const [data, subCategoryData] = await Promise.all([
    getBanner(),
    getSubCategory(),
  ]);

  return (
    <div>
      {/* Top Icon */}
      <div className="fixed right-[15px] top-[70%] z-50">
        <Link href="/">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-Clr9191 duration-200 hover:bg-Primary">
            <TopIcon />
          </div>
        </Link>
      </div>

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
    </div>
  );
}

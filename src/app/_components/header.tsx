import React from "react";
import Link from "next/link";
import { getCategory } from "@/service/getFetching";

////  Import Icons:
import { LogoIcon } from "@/assets/icons/logo-icon";
import { AccardionCategory } from "@/app/_components/accardion-category";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import dynamic from "next/dynamic";
import { SheetMenu } from "./sheet-menu";
import { Skeleton } from "@/components/ui/skeleton";

//// Import Componets:
import { Search } from "./search";

const HeaderCalc = dynamic(() => import("./header-calc"), {
  ssr: false,
  loading: () => (
    <div className="ml-5 flex items-center gap-4">
      <Skeleton className="h-[35px] w-[35px] rounded-full bg-slate-400" />
      <Skeleton className="h-[35px] w-[35px] rounded-full bg-slate-400" />
    </div>
  ),
});

export const Header = async () => {
  const categoryData = await getCategory();

  return (
    <div className="bg-white pb-2">
      {/* Header Main */}
      <div className="container fixed left-0 right-0 z-50 mx-auto mb-3 flex items-center justify-between border-b border-black bg-white py-4 tablet:relative">
        <div>
          <Link className="hidden tablet:inline-block" href="/">
            <LogoIcon />
          </Link>
          <span className="tablet:hidden">
            <SheetMenu />
          </span>
        </div>

        <div className="hidden items-center gap-4 tablet:flex">
          <p className="text-[18px] cursor-pointer text-Secondary font-medium">Contact</p>
          <p className="text-[18px] cursor-pointer text-Secondary font-medium">Blog</p>
          <p className="text-[18px] cursor-pointer text-Secondary font-medium">Popular Product</p>
          <p className="text-[18px] cursor-pointer text-Secondary font-medium">Brands</p>
        </div>

        {/* Logo Icon for mobile */}
        <Link className="tablet:hidden" href="/">
          <LogoIcon />
        </Link>

        <HeaderCalc />
      </div>

      {/* Header Second */}
      <div className="container flex-row-reverse items-center pt-[80px] tablet:flex tablet:p-0">
        <a
          href="tel:+123456789"
          className="hidden items-center gap-2 desktop:flex"
        >
          <PhoneIcon />
          <div>
            <p className="text-[14px]">Need Help ?</p>
            <p className="text-[14px] text-Secondary">+ 123 456 789</p>
          </div>
        </a>

        {/* Search bar */}
        <Search />

        {/* Accardion Category */}
        <div className="mt-3 tablet:m-0">
          <AccardionCategory
            key={categoryData?.count}
            categoryData={categoryData}
          />
        </div>
      </div>
    </div>
  );
};

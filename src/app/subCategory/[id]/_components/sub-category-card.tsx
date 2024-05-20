"use client";
import React from "react";
import { CategoryByIDType } from "@/service/types";
import { RightArrowIcon } from "@/assets/icons/right-arrow-icon";
import Link from "next/link";
import Image from "next/image";

interface SubCategoryCardProps {
  subData?: CategoryByIDType;
}

export const SubCategoryCard = ({ subData }: SubCategoryCardProps) => {
  return (
    <div className="mt-4 grid grid-cols-columnForMobile gap-2 tablet:grid-cols-columnForDesktop tablet:gap-7">
      {subData?.children.map((i) => (
        <Link
          href={`/product/${i.id}`}
          className="group relative max-w-[260px] overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-110  hover:shadow-none"
        >
          <div className="group relative flex cursor-pointer bg-white p-2 shadow-xl transition-all duration-300 tablet:h-[280px] tablet:max-w-[260px]">
            <span className="absolute left-[-24px] top-[-24px] z-0 h-[30px] w-[30px] rounded-full bg-Primary transition-all duration-300 group-hover:scale-[23]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <img
                className="mt-3 h-[120px] w-[220px] rounded-lg bg-white p-1 tablet:h-[160px]"
                src={i?.image}
                alt="img"
              />
              <div className="space-y-6 pt-3 text-center text-[14px] text-Secondary group-hover:text-white tablet:pt-8 tablet:text-[18px] desktop:text-[20px]">
                <h1>{i?.title}</h1>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

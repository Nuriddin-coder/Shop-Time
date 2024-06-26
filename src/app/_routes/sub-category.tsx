"use client";
import React from "react";
import { SubCategoryType } from "@/service/types";
import Slider from "react-slick";

//// Import Icons;
import { SubLeftArrowIcon } from "@/assets/icons/sub-left-arrow-icon";
import { SubRightArrowIcon } from "@/assets/icons/sub-right-arrow-icon";
import Link from "next/link";
interface Props {
  subData?: SubCategoryType;
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="hover group absolute right-[35%] top-[-55px] z-10 mx-auto cursor-pointer rounded-full border bg-Clr9191 p-1.5 duration-300 hover:border hover:bg-Primary mobileSecond:right-[30px]"
      onClick={onClick}
    >
      <SubRightArrowIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="group absolute right-[50%] top-[-55px] z-10 mx-auto cursor-pointer rounded-full border bg-Clr9191 p-1.5 duration-300 hover:border hover:bg-Primary  mobileSecond:right-[80px]  tablet:right-[85px] desktop:right-[90px]"
      onClick={onClick}
    >
      <SubLeftArrowIcon />
    </div>
  );
}

export const SubCategory = ({ subData }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1295,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {subData?.results?.map((item) => (
          <Link
            href={`/subCategory/${item?.id}`}
            key={item.id}
            className="group relative h-[120px] max-w-[150px] cursor-pointer rounded-xl  bg-white py-2 text-center duration-200 hover:bg-Primary mobileSecond:max-w-[180px] tablet:max-w-[210px] desktop:h-[130px] desktop:max-w-[250px]"
          >
            <img
              className="mx-auto h-[70px] w-[70px] rounded-full bg-transparent"
              src={item.image}
              alt="img"
            />
            <p className="pt-3 text-[12px] group-hover:text-white desktop:text-[18px]">
              {item.title}
            </p>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

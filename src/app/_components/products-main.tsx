"use client";
import React from "react";
import { ProductType } from "@/service/types";
import Slider from "react-slick";

//// Import Icons;
import { SubLeftArrowIcon } from "@/assets/icons/sub-left-arrow-icon";
import { SubRightArrowIcon } from "@/assets/icons/sub-right-arrow-icon";
import Link from "next/link";

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

export const ProductsMain = ({ productData }: { productData?: ProductType }) => {
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
        {productData?.results?.map((item) => (
          <Link
            href={`/productDetail/${item.id}`}
            key={item.id}
            className="group relative h-[150px] max-w-[160px] cursor-pointer rounded-xl bg-white py-2  text-center duration-200 hover:bg-Primary mobileSecond:max-w-[180px] tablet:h-[200px] tablet:max-w-[210px] tablet:pt-3 desktop:h-[220px] desktop:max-w-[250px]"
          >
            <img
              className="mx-auto h-[80px] w-[100px] rounded-lg bg-transparent tablet:h-[100px] tablet:w-[140px]"
              src={item.images[0].image}
              alt="img"
            />
            <p className="pt-3 text-[12px] group-hover:text-white tablet:pt-4 tablet:text-[16px] desktop:text-[18px]">
              {item.title.slice(0, 16)}...
            </p>
            <p className="text-[14px] font-semibold text-Secondary group-hover:text-white tablet:mt-2 tablet:text-[16px] desktop:text-[18px]">
              $ {item.price}
            </p>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

"use client";
import React from "react";
import { BrandType } from "@/service/types";
import Slider from "react-slick";

export const Brand = ({ brandData }: { brandData?: BrandType }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
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
        {brandData?.results?.map((item) => (
          <div
            key={item.id}
            className="group relative h-[120px] max-w-[160px] cursor-pointer rounded-xl bg-white py-2  text-center duration-200 mobileSecond:max-w-[180px] tablet:h-[200px] tablet:max-w-[210px] tablet:pt-3 desktop:h-[150px] desktop:max-w-[250px]"
          >
            <img
              className="mx-auto h-[60px] w-[100px] rounded-lg bg-transparent tablet:h-[70px]"
              src={item.image}
              alt="img"
            />
            <p className="pt-3 text-[14px] tablet:pt-4 tablet:text-[16px] tablet:duration-300 tablet:group-hover:scale-110 desktop:text-[18px] desktop:font-medium">
              {item.title.slice(0, 16)}...
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

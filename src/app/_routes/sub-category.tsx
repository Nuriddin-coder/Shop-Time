"use client";
import React from "react";
import { SubCategoryType } from "@/service/types";
import Slider from "react-slick";

//// Import Icons;
import { SubLeftArrowIcon } from "@/assets/icons/sub-left-arrow-icon";
import { SubRightArrowIcon } from "@/assets/icons/sub-right-arrow-icon";
interface Props {
  subData?: SubCategoryType;
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-Clr9191 mobileSecond:right-[30px] top-[-55px] right-[35%] mx-auto hover:border hover hover:bg-Primary duration-300 border group cursor-pointer absolute z-10 p-1.5 rounded-full"
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
      className="bg-Clr9191 mobileSecond:right-[80px] tablet:right-[85px] desktop:right-[90px] top-[-55px] right-[50%] mx-auto hover:border hover:bg-Primary duration-300 border group cursor-pointer absolute  z-10  p-1.5 rounded-full"
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
          <div
            key={item.id}
            className="bg-white max-w-[150px] tablet:max-w-[210px] mobileSecond:max-w-[180px] desktop:max-w-[250px] desktop:h-[130px]  relative py-2 group rounded-xl cursor-pointer hover:bg-Primary duration-200 h-[120px] text-center"
          >
            <img
              className="w-[70px] bg-transparent h-[70px] rounded-full mx-auto"
              src={item.image}
              alt="img"
            />
            <p className="text-[12px] desktop:text-[18px] pt-3 group-hover:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

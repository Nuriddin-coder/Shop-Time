"use client";
import React from "react";
import { ProductVariantType } from "@/service/types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImgType {
  imgData?: ProductVariantType;
}

const ImgSwiper: React.FC<ImgType> = (imgData) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgData?.imgData?.images.map((i) => (
          <div key={i.image_id} className="py-5">
            <img
              className="mx-auto h-[150px] w-[250px] mobileSecond:h-[250px] mobileSecond:w-[350px]"
              src={i.image}
              alt="imgs"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgSwiper;

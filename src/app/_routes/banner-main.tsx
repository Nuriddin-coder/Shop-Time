"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LeftArrowIcon } from "@/assets/icons/left-arrow-icon";
import { RightArrowIcon } from "@/assets/icons/right-arrow-icon";
import { Skeleton } from "@/components/ui/skeleton";

import { GetBannerType } from "@/service/types";

interface BannerType {
  datas?: GetBannerType;
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="group absolute z-10 hidden cursor-pointer rounded-full bg-white p-1.5 duration-300 hover:scale-110 hover:border hover:bg-Primary tablet:bottom-[70px] tablet:right-[50px] tablet:inline-block desktop:bottom-[90px] desktop:right-[95px]"
      onClick={onClick}
    >
      <RightArrowIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="group absolute z-10 hidden cursor-pointer rounded-full bg-white p-1.5 duration-300 hover:scale-110 hover:border hover:bg-Primary tablet:bottom-[70px] tablet:right-[120px] tablet:inline-block  desktop:bottom-[90px] desktop:right-[170px]"
      onClick={onClick}
    >
      <LeftArrowIcon />
    </div>
  );
}

const BannerMain = ({ datas }: BannerType) => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i: any) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const [isFake, setIsFake] = React.useState(false);

  React.useEffect(() => {
    setIsFake(true);
  }, []);

  if (!isFake) {
    return (
      <div className="container">
        <Skeleton className="h-[200px] w-full rounded-xl bg-slate-400 mobileSecond:h-[300px] desktop:h-[500px]" />
      </div>
    );
  }

  return (
    <div className="slider-container container">
      <Slider {...settings}>
        {datas?.results.map((data) => (
          <div key={data.id} className="relative">
            <img
              src={data.image}
              alt="banner"
              className="h-[200px] w-full rounded-lg object-cover mobileSecond:h-[300px] desktop:h-[500px]"
            />
            <h1 className="absolute left-4 top-[30px] text-[18px] text-white tablet:top-[150px] tablet:text-[24px] desktop:left-[100px] desktop:top-[120px] desktop:text-[38px]">
              {data.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="absolute bottom-[80px] left-4 max-w-[500px] text-[12px] text-white mobileSecond:bottom-[120px] mobileSecond:text-[16px] tablet:bottom-[180px] tablet:text-[20px] desktop:bottom-[200px] desktop:left-[100px] desktop:text-[22px]"
            ></p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerMain;

"use client";
import React, { Suspense } from "react";
import { SearchIcon } from "@/assets/icons/search-icon";
import useDebounce from "@/hook/useDebaunce";
import { ProductVariantType } from "@/service/types";
import Link from "next/link";

export const Search = () => {
  const [searchVal, setSearchVal] = React.useState<string>("");
  const [datas, setDatas] = React.useState([]);
  const name = useDebounce(searchVal);

  React.useEffect(() => {
    const getSearch = async () => {
      
      try {
        const res = await fetch(
          `http://135.181.108.207/product_variant/?search=${name}`,
          {
            next: { revalidate: 60 },
          },
        );
        const data = await res.json();
        setDatas(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if(name.length > 1){
      getSearch()
    }
  }, [name]);

  return (
    <div className="relative mx-auto flex w-[310px] items-center gap-3  rounded-xl bg-Primary pb-[2px] pl-[3.5px] pt-[3px] mobileSecond:w-[450px] tablet:w-[480px] tablet:pb-[3.1px] desktop:w-[600px]">
      <input
        onChange={(e) => setSearchVal(e.target.value)}
        className="w-[255px] rounded-lg py-1.5 pl-2 outline-none mobileSecond:w-[395px] tablet:w-[425px] tablet:py-2 desktop:w-[545px]"
        placeholder="Search"
        type="text"
      />
      <SearchIcon />
      <div className="absolute top-[41px] z-40 w-[255px] rounded-md bg-Primary mobileSecond:w-[390px] desktop:top-[46px] desktop:w-[540px]">
        {searchVal.length > 1
          ? datas?.map((i: ProductVariantType) => (
              <Link
                href={`/productDetail/${i.id}`}
                className="flex items-center gap-2 border-b border-white px-2 py-2 hover:bg-slate-400"
              >
                <img
                  className="h-[30px] w-[50px] rounded-lg tablet:h-[40px] tablet:w-[70px]"
                  src={i.images[0].image}
                  alt="img"
                />
                <h1 className="text-[14px] text-white tablet:text-[16px]">
                  {i.title.slice(0, 19)}...
                </h1>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

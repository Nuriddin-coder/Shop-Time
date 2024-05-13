import { AppleStoreIcon } from "@/assets/icons/apple-store-icon";
import { GooglePlayIcon } from "@/assets/icons/google-play-icon";
import { LogoIcon } from "@/assets/icons/logo-icon";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white py-[10px]">
      <div className="container">
        <div>
          <LogoIcon />
          <div className="flex items-center gap-3">
            <span className=" block w-[70px] rounded-lg bg-slate-400 p-1">
              <GooglePlayIcon />
            </span>
            <span className=" block w-[70px] rounded-lg bg-slate-400 p-1">
              <AppleStoreIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

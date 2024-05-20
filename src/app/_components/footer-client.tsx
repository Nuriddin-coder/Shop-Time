"use client";
import React from "react";

("import Icon's");
import { LogoIcon } from "@/assets/icons/logo-icon";
import { AccardionTopIcon } from "@/assets/icons/accardion-top-icon";
import { AccardionBottomIcon } from "@/assets/icons/accardion-bottom-icon";
import { YouTubeIcon } from "@/assets/icons/you-tube-icon";
import { WkIcon } from "@/assets/icons/wk-icon";
import { InstagramIcon } from "@/assets/icons/instagram-icon";
import { FacebookIcon } from "@/assets/icons/facebook-icon";

export const FooterClient = () => {
  const [footerAccardion, setFooterAccardion] = React.useState(false);
  const [clientAccardion, setClientAccardion] = React.useState(false);
  const [infoAccardion, setInfoAccardion] = React.useState(false);
  return (
    <div className="bg-white mt-8 py-5">
      <div className="container desktop:flex desktop:justify-between desktop:py-10">
        <div>
          <span className="mb-4 block">
            <LogoIcon />
          </span>
          <div className="my-3">
            <a className="text-clr333 font-medium" href="tel:+99893374-66-44">
              +99 893 374-66-44
            </a>
            <p className="text-clr333">help desk</p>
          </div>
          <div>
            <a className="text-clr333 font-medium" href="tel:+99893374-66-44">
              +99 890 253-77-53
            </a>
            <p className="text-clr333">quick support</p>
          </div>
          <div>
            <p className="text-clr333 my-2 text-[18px] font-medium">
              Оставайтесь на связи :
            </p>
            <div className="flex items-center gap-3">
              <button>
                <FacebookIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <WkIcon />
              </button>
              <button>
                <YouTubeIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Условия обмена и возврата */}
        <div className="hidden flex-col gap-y-2 desktop:flex">
          <h2 className="font-medium desktop:font-bold">
            Terms of exchange and return
          </h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Catalog
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            About company
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Contact
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Delivery
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Оплата
          </a>
        </div>

        {/* Client */}
        <div className="hidden flex-col gap-y-2 desktop:flex">
          <h2 className="font-medium desktop:font-bold">For clients</h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Personal Area
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Blog
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Feedback
          </a>
        </div>

        {/* Info */}
        <div className="hidden flex-col gap-y-2 desktop:flex">
          <h2 className="font-medium desktop:font-bold">Information</h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Terms of use
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Privacy Policy and Offer
          </a>
        </div>

        {/* Accardions */}
        <div className="max-w-[350px] desktop:hidden">
          {/* Accardion 1 */}
          <div className="border-clr999 mt-4 max-w-[350px] rounded-md border-[1px]">
            <button
              onClick={() => setFooterAccardion(!footerAccardion)}
              className="flex w-full items-center justify-between px-4 py-1.5"
            >
              <p className="text-clr333 font-medium">About Store</p>
              <span className="rounded-full bg-white px-[2px] py-[2px]">
                {footerAccardion ? (
                  <AccardionBottomIcon />
                ) : (
                  <AccardionTopIcon />
                )}
              </span>
            </button>

            <div
              className={`grid overflow-hidden px-3 transition-all duration-300 ease-in-out ${
                footerAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="flex flex-col gap-y-4 overflow-hidden">
                <a className="text-clr333 " href="#">
                  Catalog
                </a>
                <a className="text-clr333 " href="#">
                  About company
                </a>
                <a className="text-clr333 " href="#">
                  Contact
                </a>
                <a className="text-clr333 " href="#">
                  Delivery
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Оплата
                </a>
              </div>
            </div>
          </div>

          {/* Accardion 2 */}
          <div className="border-clr999 mt-4 max-w-[350px] rounded-md border-[1px]">
            <button
              onClick={() => setClientAccardion(!clientAccardion)}
              className="flex w-full items-center justify-between px-4 py-1.5"
            >
              <p className="text-clr333 font-medium">For clients</p>
              <span className="rounded-full bg-white px-[2px] py-[2px]">
                {clientAccardion ? (
                  <AccardionBottomIcon />
                ) : (
                  <AccardionTopIcon />
                )}
              </span>
            </button>

            <div
              className={`grid overflow-hidden px-3 transition-all duration-300 ease-in-out ${
                clientAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="flex flex-col gap-y-4 overflow-hidden">
                <a className="text-clr333 " href="#">
                  Personal Area
                </a>
                <a className="text-clr333 " href="#">
                  Blog
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Feedback
                </a>
              </div>
            </div>
          </div>

          {/* Accardion 3 */}
          <div className="border-clr999 mt-4 max-w-[350px] rounded-md border-[1px]">
            <button
              onClick={() => setInfoAccardion(!infoAccardion)}
              className="flex w-full items-center justify-between px-4 py-1.5"
            >
              <p className="text-clr333 font-medium">Information</p>
              <span className="rounded-full bg-white px-[2px] py-[2px]">
                {infoAccardion ? <AccardionBottomIcon /> : <AccardionTopIcon />}
              </span>
            </button>

            <div
              className={`grid overflow-hidden px-3 transition-all duration-300 ease-in-out ${
                infoAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="flex flex-col gap-y-4 overflow-hidden">
                <a className="text-clr333 " href="#">
                  Terms of use
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Privacy Policy and Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

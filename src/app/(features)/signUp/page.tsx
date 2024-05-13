import { GitHubIcon } from "@/assets/icons/git-hub-icon";
import { GoogleIcon } from "@/assets/icons/google-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-gradient-to-tr from-Secondary to-Primary">
      <div className="container py-6 tablet:pb-[55px] pb-4 tablet:pt-8">
        <h1 className="pb-4 text-center text-[20px] font-medium text-white tablet:my-[25px] tablet:text-[26px]">
          Sign Up
        </h1>
        <div>
          <form className="flex flex-col items-center gap-y-6">
            <input
              placeholder="Name"
              className="w-[300px] rounded-lg border border-white bg-transparent py-2 pl-4 text-white outline-none placeholder:text-white tablet:w-[350px] tablet:py-3"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-[300px] rounded-lg border border-white bg-transparent py-2 pl-4 text-white outline-none placeholder:text-white tablet:w-[350px] tablet:py-3"
              type="text"
            />
            <input
              placeholder="Password"
              className="w-[300px] rounded-lg border border-white bg-transparent py-2 pl-4 text-white outline-none placeholder:text-white tablet:w-[350px] tablet:py-3"
              type="password"
            />
            <Button className="tablet:mt-4" type="submit" variant="secondary">
              Sign Up
            </Button>
          </form>
        </div>

        {/* Social Provider */}
        <div>
          <h1 className="pb-4 pt-6 text-center text-white tablet:text-[18px] desktop:text-[20px]">
            You can Sign Up this methods:
          </h1>
          <span className="flex items-center justify-center gap-4 pb-2">
            <Link
              href="/"
              className=" rounded-lg bg-white px-6 py-1.5 duration-200 hover:scale-105"
            >
              <GoogleIcon />
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-white px-6 py-1.5 duration-200 hover:scale-105"
            >
              <GitHubIcon />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

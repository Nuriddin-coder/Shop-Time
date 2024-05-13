"use client";
import { GitHubIcon } from "@/assets/icons/git-hub-icon";
import { GoogleIcon } from "@/assets/icons/google-icon";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import React from "react";

const SignInPage: NextPage = () => {
  const authGoogle = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  
  const authGitHub = () => {
    signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="bg-gradient-to-tr from-Primary to-Secondary">
      <div className="container py-6 pb-[70px] tablet:pt-8">
        <h1 className="pb-4 text-center text-[20px] font-medium text-white tablet:my-[25px] tablet:text-[26px]">
          Sign In
        </h1>
        <div>
          <form className="flex flex-col items-center gap-y-6">
            <input
              placeholder="Email"
              className="w-[300px] rounded-lg border border-white bg-transparent py-2 pl-4 text-white outline-none placeholder:text-white tablet:w-[350px] tablet:py-3"
              type="text"
            />
            <input
              placeholder="Password"
              className="w-[300px] rounded-lg border border-white bg-transparent py-2 pl-4 text-white outline-none placeholder:text-white tablet:w-[350px] tablet:py-3"
              type="text"
            />
            <Button className="tablet:mt-4" type="submit" variant="secondary">
              Sign In
            </Button>
          </form>
        </div>

        {/* Social Provider */}
        <div>
          <h1 className="pb-4 pt-6 text-center text-white tablet:text-[18px] desktop:text-[20px]">
            You can continue this methods:
          </h1>
          <span className="flex items-center justify-center gap-4 pb-2">
            <button
              onClick={authGoogle}
              className=" rounded-lg bg-white px-6 py-1.5 duration-200 hover:scale-105"
            >
              <GoogleIcon />
            </button>
            <button
              onClick={authGitHub}
              className="rounded-lg bg-white px-6 py-1.5 duration-200 hover:scale-105"
            >
              <GitHubIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

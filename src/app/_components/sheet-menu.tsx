"use client";
import React from "react";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { CancelIcon } from "@/assets/icons/cancel-icon";
import Link from "next/link";

export function SheetMenu() {
  const userData = useSession();
  const pathname = usePathname();

  const [close, setClose] = React.useState(true);

  React.useEffect(() => {
    setClose(false);
  }, [pathname]);

  return (
    <div>
      {userData.status === "loading" ? (
        <Skeleton className="h-10 w-10 rounded-full bg-slate-400" />
      ) : (
        <div>
          {userData.status === "unauthenticated" ? (
            <Drawer direction="left" open={close} onOpenChange={setClose}>
              <DrawerTrigger asChild>
                <span>
                  <MenuIcon />
                </span>
              </DrawerTrigger>
              <DrawerContent className="m-0 bg-ClrF4F5">
                <button
                  onClick={() => setClose(!close)}
                  className="absolute right-[15px] top-2 text-[22px] font-bold"
                >
                  <CancelIcon />
                </button>

                <Link href="/subCategory">SubCategorys</Link>

                <div className="mt-[100px] pl-2">
                  <p className="text-[18px] text-Secondary">
                    You don't have account ?
                  </p>
                  <span className="mt-1 flex items-center gap-3">
                    <Link
                      className="rounded-lg bg-Primary px-4 py-1 text-white"
                      href="/signIn"
                    >
                      Sign in
                    </Link>
                    <Link
                      className="rounded-lg bg-Primary px-4 py-1 text-white"
                      href="/signUp"
                    >
                      Sign up
                    </Link>
                  </span>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Drawer direction="left" open={close} onOpenChange={setClose}>
              <DrawerTrigger asChild>
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={userData.data?.user?.image || ""}
                  alt="img"
                />
              </DrawerTrigger>
              <DrawerContent className="m-0">
                <button
                  onClick={() => setClose(!close)}
                  className="absolute right-[20px] top-2 rounded-lg border border-black px-2 pb-1 text-[22px] font-bold"
                >
                  x
                </button>

                <div>
                  <img
                    className="h-[35px] w-[35px] rounded-full"
                    src={userData.data?.user?.image || ""}
                    alt="img"
                  />
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { ProfileIcon } from "@/assets/icons/profile-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ProfileButton() {
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();
  const data = useSession();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      {data.status === "unauthenticated" ? (
        <HoverCard open={open} onOpenChange={setOpen}>
          <HoverCardTrigger asChild>
            <Button className="group rounded-full border-none bg-transparent outline-none hover:bg-Primary">
              <ProfileIcon />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-32 justify-center pb-3">
            <div className="flex justify-between space-x-4 p-0">
              <div className="space-y-1">
                <div className="mx-auto my-3 w-[90px] cursor-pointer rounded-lg border border-white bg-transparent py-1 text-center text-white hover:scale-105">
                  <Link href="/signIn">Sign In</Link>
                </div>
                <div className="mx-auto mb-2 w-[90px] cursor-pointer rounded-lg border border-white bg-transparent py-1 text-center text-white hover:scale-105">
                  <Link href="/signUp">Sign Up</Link>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/profile">
                <img
                  className="h-[35px] w-[35] rounded-full"
                  src={data?.data?.user?.image || ""}
                  alt="img"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{data.data?.user?.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}

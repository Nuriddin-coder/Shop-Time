"use client";
import React from "react";
import { useSession } from "next-auth/react";

export const OrderForm = () => {
  const session = useSession();

  return (
    <div className="tablet:mt-[20px]">
      <h1 className="text-[18px] font-medium desktop:text-[22px]">
        Ordering :
      </h1>
      <form>
        <div className="mb-2 flex flex-col">
          <label className="pl-1 text-Secondary">Name :</label>
          <input
            defaultValue={session.data?.user?.name ?? ""}
            type="text"
            placeholder="Name"
            className="w-[300px] rounded-lg border py-2 pl-2 text-Secondary outline-none tablet:w-[400px] desktop:w-[500px] desktop:py-3"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="pl-1 text-Secondary">Email :</label>
          <input
            defaultValue={session.data?.user?.email ?? ""}
            type="email"
            placeholder="Email"
            className="w-[300px] rounded-lg border py-2 pl-2 text-Secondary outline-none tablet:w-[400px] desktop:w-[500px] desktop:py-3"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="pl-1 text-Secondary">Phone :</label>
          <input
            min="0"
            inputMode="numeric"
            type="number"
            placeholder="+998"
            className="w-[300px] rounded-lg border py-2 pl-2 text-Secondary outline-none tablet:w-[400px] desktop:w-[500px] desktop:py-3"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="pl-1 text-Secondary">Address :</label>
          <input
            type="text"
            placeholder="Address"
            className="w-[300px] rounded-lg border py-2 pl-2 text-Secondary outline-none tablet:w-[400px] desktop:w-[500px] desktop:py-3"
          />
        </div>
      </form>
    </div>
  );
};

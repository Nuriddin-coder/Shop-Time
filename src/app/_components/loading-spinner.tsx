import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="mx-auto mt-[130px] w-[190px]">
      <div role="status" className="flex items-center gap-8">
        <p className="text-[22px] tablet:text-[28px]">Loading...</p>
        <div>
          <div className="relative mb-10">
            <div className="h-22 w-22 rounded-full border-b-8 border-t-8 border-gray-200"></div>
            <div className="absolute left-0 top-0 h-16 w-16 animate-spin rounded-full border-b-8 border-t-8 border-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

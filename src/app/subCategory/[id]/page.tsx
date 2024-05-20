import React, { Suspense } from "react";
import { getCategoryByID } from "@/service/getFetching";

///// Import Components:
import { SubCategoryCard } from "./_components/sub-category-card";
import { BreadCrumb } from "./_components/bread-crumb";
import { LoadingSpinner } from "@/app/_components/loading-spinner";

const SubCategoryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const categoryByIDdata = await getCategoryByID(Number(id));

  return (
    <div className="container">
      <div className="flex items-center gap-[307px]">
        <div className="mx-auto max-w-[220px] py-3 tablet:m-0">
          <BreadCrumb subBreadData={categoryByIDdata} />
        </div>
      </div>
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <div>
            {categoryByIDdata?.children?.length ? (
              <SubCategoryCard subData={categoryByIDdata} />
            ) : (
              <h1 className="mt-[70px] text-center text-[32px] text-Secondary tablet:mt-[200px] tablet:text-[42px]">
                Ooops!, No Data yet.
              </h1>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default SubCategoryPage;

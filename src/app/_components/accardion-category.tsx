"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

///// Import Icons:
import { CategoryIcon } from "@/assets/icons/category-icon";
import Link from "next/link";
import { CategoryType } from "@/service/types";

interface CategoryProps {
  categoryData?: CategoryType;
}

export const AccardionCategory: React.FC<CategoryProps> = ({
  categoryData,
}) => {
  const [open, setOpen] = React.useState(false);

  const params = useParams();

  React.useEffect(() => {
    setOpen(true);
  }, [params]);

  return (
    <div>
      <Accordion
        type="single"
        //@ts-ignore
        value={open}
        //@ts-ignore
        onValueChange={setOpen}
        collapsible
        className="mx-auto w-[280px]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>
              <CategoryIcon />
            </span>
            Shop By Category
          </AccordionTrigger>
          <AccordionContent>
            {categoryData?.results.map((i) => (
              <Link
                href={`/subCategory/${i.id}`}
                key={i.id}
                className="block border-b border-black px-1 py-2 duration-300 hover:border-Primary hover:text-Primary"
              >
                {i.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

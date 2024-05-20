"use server";
import { BrandType, GetBannerType, ProductVariantType } from "./types";
import { CategoryType } from "./types";
import { CategoryByIDType } from "./types";
import { SubCategoryType } from "./types";
import { ProductType } from "./types";

const url = process.env.APP_URL;

{
  /* Banner Fetching: */
}
const getBanner = async () => {
  try {
    const res = await fetch(`${url}/banner/`, { next: { revalidate: 60 } });
    const data: GetBannerType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getBanner };

{
  /* Category Fetching: */
}
const getCategory = async () => {
  try {
    const res = await fetch(`${url}/category/`, { next: { revalidate: 60 } });
    const data: CategoryType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCategory };

{
  /* Category By ID Fetching: */
}
const getCategoryByID = async (id: number) => {
  try {
    const res = await fetch(`${url}/category/${id}`, {
      next: { revalidate: 60 },
    });
    const data: CategoryByIDType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCategoryByID };

{
  /* SubCategory Fetching: */
}
const getSubCategory = async () => {
  try {
    const res = await fetch(`${url}/api/subcategory/`, {
      next: { revalidate: 60 },
    });
    const data: SubCategoryType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getSubCategory };

const getProductVariant = async (id: number) => {
  try {
    const res = await fetch(`${url}/product_variant/${id}/`, {
      next: { revalidate: 60 },
    });
    const data: ProductVariantType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getProductVariant };

const getAttributeValue = async (id: number) => {
  try {
    const res = await fetch(`${url}/attribute-value/${id}/`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAttributeValue };

const getProductVariantAll = async () => {
  try {
    const res = await fetch(`${url}/product_variant/`, {
      next: { revalidate: 60 },
    });
    const data: ProductType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getProductVariantAll };

const getBrand = async () => {
  try {
    const res = await fetch(`${url}/brand/`, {
      next: { revalidate: 60 },
    });
    const data: BrandType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getBrand };

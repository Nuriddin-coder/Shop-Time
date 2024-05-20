export interface GetBannerType {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export interface CategoryType {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    title: string;
    image: string;
    parent: {
      id: number;
      title: string;
    };
    children: {
      id: number;
      title: string;
      image: string;
    }[];
  }[];
}

export interface CategoryByIDType {
  id: number;
  title: string;
  image: string;
  parent: null;
  children: {
    id: number;
    title: string;
    image: string;
  }[];
}

export interface SubCategoryType {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    title: string;
    image: string;
    parent: {
      id: number;
      title: string;
    }[];
  }[];
}

export interface ProductType {
  count: number;
  next: null;
  previous: null;
  results: {
    attribute_value: number[];
    id: number;
    images: {
      image: string;
    }[];
    is_available: boolean;
    other_detail: string;
    price: string;
    price_with_discount: null;
    product: number;
    quantity: number;
    title: string;
  }[];
}

export interface ProductVariantType {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: number[];
  other_detail: string | null;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount: number;
  userPrice: number;
}

export interface BrandType {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    title: string;
    image: string;
  }[];
}

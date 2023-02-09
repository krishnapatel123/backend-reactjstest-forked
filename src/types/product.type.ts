export interface productType {
  id: number | null;
  name: string;
  imageMedia: string;
  currentPrice: number;
  originalPrice: number;
  genderId: number | null;
  brandId: number | null;
  categoryId: number | null;
  sizeId: number[];
  colorId: number[];
  isLike: boolean;
  isNewArrival: boolean;
  description: string;
  reviewRate: number;
  imageCollections: string[]
}
export interface getProductType {
  id: number | null;
  name: string;
  imageMedia: string;
  currentPrice: number;
  originalPrice: number;
  gender: {
    id: number,
    name: string,
    value: string
  },
  brand: {
    id: number,
    name: string,
    value: string
  },
  category: {
    id: number,
    name: string,
    value: string
  },
  sizeId: number[];
  colorId: number[];
  isLike: boolean;
  isNewArrival: boolean;
  description: string;
  reviewRate: number;
  imageCollections: string[]
}
export interface productType {
  id: number | null;
  name: string;
  imagePath: string;
  currentPrice: number | 0;
  originalPrice: number | 0;
  genderId: number | null;
  brandId: number | null;
  categoryId: number | null;
  sizeId: number | null;
  isLike: boolean;
  isNewArrival: boolean;
  description: string;
  reviewRate: number | 0;
  imageCollections: [
    {
      id: number | null;
      imagePath: string;
    }
  ]
}
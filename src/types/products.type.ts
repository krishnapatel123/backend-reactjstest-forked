import { CartItems } from "../entities/cartItems.entity"
import { Product } from "../entities/product.entity"

export interface productsType {
  id: number
  productName: string
  productImages: string[]
  productDescription: string[]
  productOriginalPrice: number
  productCurrentPrice: number
  gender: number
  category: number
  brand: number
  size: number[]
  color: number[]
  reviewRate: number,
  slug: string,
  type: number
}

export interface productResType {
  filterData: Product | Product[] | CartItems[]
  totalCount?: number
  priceRange?: { min: number, max: number }
}
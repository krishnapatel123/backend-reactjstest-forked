export interface CartItemsDetailType {
  id: number;
  cartId: number;
  quantity: number;
  size: number;
  color: number;
  productId: number;
}

export interface TotalInfoType {
  grandTotal: number;
  subTotal: number;
  Shipping?: number;
  VatAndTax?: number;
}

export interface cartProductListsType {
  cartItemsDetails: CartItemsDetailType[];
  totalInfo: TotalInfoType;
  userId?: number
  shippingId?: number
  checkoutId?: number
}

export interface updateCartDataType {
  id: number
  quantity?: string
  size?: number
  color?: number
}

export interface addCartDataType {
  productId: number
  quantity: number
  size: number
  color: number
  userId: number | any
}
// export interface orderDetailsType {
//   userId: number,
//   shippingId: number,
//   checkoutId: number,
//   total: number,
//   productId: number,
//   quanity: number,
//   sizeId: number,
//   colorId: number
// }

export interface orderDetailsType {
  cartItemsDetails: [
    {
      id: number,
      cartId: number,
      productId: number,
      quantity: number,
      size: number,
      color: number
    }
  ],
  userId: number,
  shippingId: number,
  checkoutId: number,
  totalInfo: {
    grandTotal: number,
    subTotal: number,
    Shipping: number,
    VatAndTax: number
  }
}
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
  productList: [
    {
      productId: number,
      quantity: number,
      sizeId: number,
      colorId: number
    }
  ],
  information: {
    userId: number,
    total: number,
    shippingId: number,
    checkoutId: number
  }
}
// export interface orderDetailType {
//   id: number | null;
//   userId: number | null;
//   shippingId: number | null;
//   checkoutId: number | null;
//   total: number;
// }

export interface afterAddOrderItemType {
  id: number | null;
  orderDetailId: number | null;
  productId: number | null;
  quantity: number;
  color: {
    id: number;
    name: string;
    value: string;
    haxCode: string;
  };
  size: {
    id: number;
    name: string;
    value: string;
  };
}

export interface orderDetailType {
  id: number | null;
  userId: number | null;
  shippingId: number | null;
  checkoutId: number | null;
  total: number;
  productId: number | null;
  quantity: number;
  colorId: number;
  sizeId: number
}

export interface Size {
  id: number;
  name: string;
  value: string;
}

export interface Color {
  id: number;
  name: string;
  value: string;
  haxCode: string;
}

export interface OrderItemDetail {
  id: number;
  quantity: number;
  size: Size;
  color: Color;
}

export interface UserData {
  id: number;
  name: string;
}

export interface ShippingDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  deliveryDate: string;
  convenientTime: string;
  city: string;
  address: string;
  zipCode: string;
}

export interface CheckoutDetails {
  id: number;
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvvCode: number;
}

export interface getOrderDetailType {
  id: number;
  total: number;
  created_At: Date;
  orderItemDetails: OrderItemDetail[];
  userData: UserData;
  shippingDetails: ShippingDetails;
  checkoutDetails: CheckoutDetails;
}


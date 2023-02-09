export interface checkoutType {
  id: number | null;
  userId: number | null;
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvvCode: number;
}
export interface afterAddCheckoutType {
  id: number | null;
  userData: {
    id: number,
    name: string
  },
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvvCode: number;
}
export interface getCheckoutType {
  id: number | null;
  userData: {
    id: number,
    name: string
  },
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvvCode: number;
}
export interface checkoutType {
  id: number | null;
  userId: number | null;
  paymentMethod: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvvCode: number;
}
export type UserRoleType = "credit/debitCard" | "paypal" | "bitcoin"

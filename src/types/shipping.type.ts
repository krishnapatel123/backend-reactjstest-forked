export interface shippingType {
  id: number | null;
  userId: number | null;
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

export interface getShippingType {
  id: number | null;
  userData: {
    id: number,
    name: string
  };
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
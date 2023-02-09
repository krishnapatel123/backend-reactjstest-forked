export interface orderDetailType {
  id: number | null;
  userId: number | null;
  shippingId: number | null;
  checkoutId: number | null;
  total: number;
}

export interface orderItemType {
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

export interface commonOrderType {
  id: number | null;
  userId: number | null;
  shippingId: number | null;
  checkoutId: number | null;
  total: number;
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

export interface getOrderDetailsType {
  id: number | null;
  userData: {
    id: number,
    name: string
  },
  shippingDetails: {

  }
}
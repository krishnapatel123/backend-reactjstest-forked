import { myDataSource } from '../data-source';
import { checkoutType } from '../types/checkout.type';
import { Checkout } from '../entities/checkout.entity';

export const addCheckout = async (checkoutObject): Promise<checkoutType> => {

  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkout = new Checkout();
  checkout.userId = checkoutObject.userId
  checkout.paymentMethod = checkoutObject.paymentMethod
  checkout.cardName = checkoutObject.cardName
  checkout.cardNumber = checkoutObject.cardNumber
  checkout.expiration = checkoutObject.expiration
  checkout.cvvCode = checkoutObject.cvvCode
  const saveObj = await checkoutRepository.save(checkout)
  return saveObj;
}

export const getCheckout = async (): Promise<checkoutType[]> => {
  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkoutDetail = await checkoutRepository.find()
  return checkoutDetail;
}
import { myDataSource } from '../data-source';
import { checkoutType } from '../types/checkout.type';
import { Checkout } from '../entities/checkout.entity';

export const addCheckout = async (checkoutObject: checkoutType) => {
  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkout = new Checkout();
  try {
    checkout.userData = checkoutObject.userId
    checkout.paymentMethod = checkoutObject.paymentMethod
    checkout.cardName = checkoutObject.cardName
    checkout.cardNumber = checkoutObject.cardNumber
    checkout.expiration = checkoutObject.expiration
    checkout.cvvCode = checkoutObject.cvvCode
    const res = await checkoutRepository.save(checkout)
    return { checkoutId: res.id };
  } catch (error) {
    return error.message;
  }
}

export const getCheckout = async () => {
  try {
    const checkoutRepository = myDataSource.getRepository(Checkout)
    return checkoutRepository.find({ relations: { userData: true } })
  } catch (error) {
    return error.message
  }
}
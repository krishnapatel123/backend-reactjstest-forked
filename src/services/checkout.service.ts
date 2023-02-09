import { myDataSource } from '../data-source';
import { checkoutType, getCheckoutType } from '../types/checkout.type';
import { Checkout } from '../entities/checkout.entity';
import { UserData } from '../entities/user.entity';

export const addCheckout = async (checkoutObject: checkoutType) => {

  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkout = new Checkout();

  const userRepository = myDataSource.getRepository(UserData)
  const userData = await userRepository.findOne({ where: { id: checkoutObject.userId } })

  checkout.userData = userData
  checkout.paymentMethod = checkoutObject.paymentMethod
  checkout.cardName = checkoutObject.cardName
  checkout.cardNumber = checkoutObject.cardNumber
  checkout.expiration = checkoutObject.expiration
  checkout.cvvCode = checkoutObject.cvvCode
  const saveObj = await checkoutRepository.save(checkout)
  return saveObj;
}

export const getCheckout = async (): Promise<getCheckoutType[]> => {
  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkoutDetail = await checkoutRepository.find({ relations: { userData: true } })
  return checkoutDetail;
}
import { myDataSource } from '../data-source';
import { checkoutType } from '../types/checkout.type';
import { Checkout } from '../entities/checkout.entity';
import { UserData } from '../entities/user.entity';

export const addCheckout = async (checkoutObject: checkoutType) => {

  console.log("checkout obj in add API :::::::: ", checkoutObject);

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
    console.log("CHECKIUT:::::::::::: ", res.id);
    return { checkoutId: res.id };
  } catch (error) {
    console.log("error checkout : ", error);
    return error.message;
  }
}

export const getCheckout = async (): Promise<Checkout[]> => {
  const checkoutRepository = myDataSource.getRepository(Checkout)
  return checkoutRepository.find({ relations: { userData: true } })
}
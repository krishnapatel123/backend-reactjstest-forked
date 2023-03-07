import { myDataSource } from '../data-source';
import { checkoutType } from '../types/checkout.type';
import { Checkout } from '../entities/checkout.entity';
import { Cart } from '../entities/cart.entity';

export const addCheckout = async (checkoutObject: checkoutType) => {
  try {
    const checkoutRepository = myDataSource.getRepository(Checkout)
    const checkout = new Checkout();
    checkout.userData = checkoutObject.userId
    checkout.paymentMethod = checkoutObject.paymentMethod
    checkout.cardName = checkoutObject.cardName
    checkout.cardNumber = checkoutObject.cardNumber
    checkout.expiration = checkoutObject.expiration
    checkout.cvvCode = checkoutObject.cvvCode
    const res = await checkoutRepository.save(checkout)
    const cartRepository = myDataSource.getRepository(Cart);
    let updatedcheckoutobj = await cartRepository.createQueryBuilder("cart").update(Cart).set({ shippingDetail: res.id }).where({ id: checkoutObject.cartId }).execute();
    return { checkoutId: res.id };
  } catch (error) {
    return error.message;
  }
}

export const getCheckout = async (userId, cartId) => {
  try {
    const checkoutRepository = myDataSource.getRepository(Cart)
    const checkoutDetail = await checkoutRepository
      .createQueryBuilder('cart')
      .select('cart.checkoutDetailId')
      .where("cart.id = :id", { id: parseInt(cartId) })
      .andWhere("cart.userDataId = :uId", { uId: userId })
      .getRawOne();
    if (checkoutDetail.checkoutDetailId !== null) return { checkoutId: checkoutDetail.checkoutDetailId };
    else return { checkoutId: 0 };
  } catch (error) {
    return error.message
  }
}
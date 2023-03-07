import { myDataSource } from '../data-source';
import { shippingType } from '../types/shipping.type';
import { Shipping } from '../entities/shipping.entity';
import { Cart } from '../entities/cart.entity';

export const addShipping = async (shippingObject: shippingType) => {
  try {
    const shippingRepository = myDataSource.getRepository(Shipping)
    const shipping = new Shipping();
    shipping.userData = shippingObject.userId
    shipping.firstName = shippingObject.firstName
    shipping.lastName = shippingObject.lastName
    shipping.email = shippingObject.emailAddress
    shipping.phoneNumber = shippingObject.phoneNumber
    shipping.deliveryDate = shippingObject.deliveryDate
    shipping.convenientTime = shippingObject.convenientTime
    shipping.city = shippingObject.city
    shipping.address = shippingObject.address
    shipping.zipCode = shippingObject.zipCode
    const res = await shippingRepository.save(shipping)
    const cartRepository = myDataSource.getRepository(Cart);
    let uddatedcartobj = await cartRepository.createQueryBuilder("cart").update(Cart).set({ shippingDetail: res.id }).where({ id: shippingObject.cartId }).execute();
    return { shippingId: res.id };
  } catch (error) {
    return error.message;
  }
}

export const getShipping = async (userId, cartId) => {
  try {
    const shippingRepository = myDataSource.getRepository(Cart)
    const shippingDetail = await shippingRepository
      .createQueryBuilder('cart')
      .select('cart.shippingDetailId')
      .where("cart.id = :id", { id: parseInt(cartId) })
      .andWhere("cart.userDataId = :uId", { uId: userId })
      .getRawOne();
    if (shippingDetail.shippingDetailId !== null) return { shippingId: shippingDetail.shippingDetailId };
    else return { shippingId: 0 };
  } catch (error) {
    return error.message
  }
}
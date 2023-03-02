import { myDataSource } from '../data-source';
import { shippingType } from '../types/shipping.type';
import { Shipping } from '../entities/shipping.entity';

export const addShipping = async (shippingObject: shippingType) => {

  const shippingRepository = myDataSource.getRepository(Shipping)
  const shipping = new Shipping();
  try {
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
    console.log("SHIPPING:::::::::::: ", res.id);
    return { shippingId: res.id };
  } catch (error) {
    return error.message;
  }
}

export const getShipping = async (): Promise<Shipping[]> => {
  const shippingRepository = myDataSource.getRepository(Shipping)
  const shippingDetail = await shippingRepository.find({ relations: { userData: true } })
  return shippingDetail;
}
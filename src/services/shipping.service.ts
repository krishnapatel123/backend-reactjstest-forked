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
    shipping.email = shippingObject.email
    shipping.phoneNumber = shippingObject.phoneNumber
    shipping.deliveryDate = shippingObject.deliveryDate
    shipping.convenientTime = shippingObject.convenientTime
    shipping.city = shippingObject.city
    shipping.address = shippingObject.address
    shipping.zipCode = shippingObject.zipCode
    return shippingRepository.save(shipping)
  } catch (error) {
    return error.message;
  }
}

export const getShipping = async (): Promise<Shipping[]> => {
  const shippingRepository = myDataSource.getRepository(Shipping)
  const shippingDetail = await shippingRepository.find({ relations: { userData: true } })
  return shippingDetail;
}
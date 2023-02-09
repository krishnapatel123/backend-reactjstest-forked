import { myDataSource } from '../data-source';
import { getShippingType, shippingType } from '../types/shipping.type';
import { Shipping } from '../entities/shipping.entity';
import { UserData } from '../entities/user.entity';

export const addShipping = async (shippingObject: shippingType) => {

  const shippingRepository = myDataSource.getRepository(Shipping)
  const shipping = new Shipping();

  const userRepository = myDataSource.getRepository(UserData)
  const userData = await userRepository.findOne({ where: { id: shippingObject.userId } })

  shipping.userData = userData
  shipping.firstName = shippingObject.firstName
  shipping.lastName = shippingObject.lastName
  shipping.email = shippingObject.email
  shipping.phoneNumber = shippingObject.phoneNumber
  shipping.deliveryDate = shippingObject.deliveryDate
  shipping.convenientTime = shippingObject.convenientTime
  shipping.city = shippingObject.city
  shipping.address = shippingObject.address
  shipping.zipCode = shippingObject.zipCode
  const obj = await shippingRepository.save(shipping)
  return obj;
}

export const getShipping = async (): Promise<getShippingType[]> => {
  const shippingRepository = myDataSource.getRepository(Shipping)
  const shippingDetail = await shippingRepository.find({ relations: { userData: true } })
  return shippingDetail;
}
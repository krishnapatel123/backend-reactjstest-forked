import { myDataSource } from '../data-source';
import { OrderDetails } from '../entities/orderDetails.entity';
import { OrderItems } from '../entities/orderItems.entity';
import { UserData } from '../entities/user.entity';
import { Shipping } from '../entities/shipping.entity';
import { Checkout } from '../entities/checkout.entity';
import { Product } from '../entities/product.entity';
import { Color } from '../entities/color.entity';
import { Size } from '../entities/size.entity';
import { getOrderDetailType, orderDetailType } from '../types/orderDetail.type';

export const addOrderDetails = async (orderDetailsObj: orderDetailType) => {

  const userRepository = myDataSource.getRepository(UserData)
  const userData = await userRepository.findOne({ where: { id: orderDetailsObj.userId } })

  const shippingRepository = myDataSource.getRepository(Shipping)
  const shippingData = await shippingRepository.findOne({ where: { id: orderDetailsObj.shippingId } })

  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkoutData = await checkoutRepository.findOne({ where: { id: orderDetailsObj.checkoutId } })

  await myDataSource
    .createQueryBuilder()
    .insert()
    .into(OrderDetails)
    .values({
      userData: userData,
      shippingDetails: shippingData,
      checkoutDetails: checkoutData,
      total: orderDetailsObj.total
    })
    .execute().then(async (res) => {
      const lastInsertedOrderId = res?.identifiers[0].id

      const productRepository = myDataSource.getRepository(Product)
      const productData = await productRepository.findOne({ where: { id: orderDetailsObj.productId } })

      const colorRepository = myDataSource.getRepository(Color)
      const colorData = await colorRepository.findOne({ where: { id: orderDetailsObj.colorId } })

      const sizeRepository = myDataSource.getRepository(Size)
      const sizeData = await sizeRepository.findOne({ where: { id: orderDetailsObj.sizeId } })

      await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
        orderDetails: lastInsertedOrderId,
        product: productData,
        quantity: orderDetailsObj.quantity,
        color: colorData,
        size: sizeData,
      }).execute().then(async (res) => {
        console.log("after save obj : ", res);
        return res;
      })
    });
}
export const getOrderDetails = async (): Promise<getOrderDetailType> => {
  const orderDetails = await myDataSource.getRepository(OrderDetails)
    .createQueryBuilder("orderDetails")
    .innerJoinAndSelect(
      "orderDetails.orderItemDetails",
      "orderItemDetails"
    )
    .innerJoinAndSelect(
      "orderDetails.userData",
      "userData"
    )
    .innerJoinAndSelect(
      "orderDetails.shippingDetails",
      "shippingDetails"
    )
    .innerJoinAndSelect(
      "orderDetails.checkoutDetails",
      "checkoutDetails"
    )
    .leftJoinAndSelect(
      "orderItemDetails.size",
      "size"
    )
    .leftJoinAndSelect(
      "orderItemDetails.color",
      "color"
    )
    .getOne()


  return orderDetails;
}
import { InsertResult } from 'typeorm';
import { myDataSource } from '../data-source';
import { OrderDetails } from '../entities/orderDetails.entity';
import { commonOrderType, orderDetailType, orderItemType } from '../types/orderDetail.type';
import { OrderItems } from '../entities/orderItems.entity';
import { UserData } from '../entities/user.entity';
import { Shipping } from '../entities/shipping.entity';
import { Checkout } from '../entities/checkout.entity';
import { Product } from '../entities/product.entity';
import { Color } from '../entities/color.entity';
import { Size } from '../entities/size.entity';

export const addOrderDetails = async (orderDetailsObj: any) => {
  console.log("start service :: ", orderDetailsObj);

  const userRepository = myDataSource.getRepository(UserData)
  const userData = await userRepository.findOne({ where: { id: orderDetailsObj.userId } })
  console.log("userid data : ", userData);

  const shippingRepository = myDataSource.getRepository(Shipping)
  const shippingData = await shippingRepository.findOne({ where: { id: orderDetailsObj.shippingId } })
  console.log("userid data : ", shippingData);

  const checkoutRepository = myDataSource.getRepository(Checkout)
  const checkoutData = await checkoutRepository.findOne({ where: { id: orderDetailsObj.checkoutId } })
  console.log("userid data : ", checkoutData);

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
      console.log("saveobj orderdetails : ", res?.identifiers[0].id);
      const lastInsertedOrderId = res?.identifiers[0].id

      const productRepository = myDataSource.getRepository(Product)
      const productData = await productRepository.findOne({ where: { id: orderDetailsObj.productId } })
      console.log("userid data : ", productData);

      const colorRepository = myDataSource.getRepository(Color)
      const colorData = await colorRepository.findOne({ where: { id: orderDetailsObj.colorId } })
      console.log("userid data : ", colorData);

      const sizeRepository = myDataSource.getRepository(Size)
      const sizeData = await sizeRepository.findOne({ where: { id: orderDetailsObj.sizeId } })
      console.log("userid data : ", sizeData);

      await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
        orderDetails: lastInsertedOrderId,
        product: productData,
        quantity: orderDetailsObj.quantity,
        color: colorData,
        size: sizeData,
      }).execute().then(async (res) => {
        console.log("saveobj order item details : ", res);
        return res;
      })
    });
  return;
}
export const getOrderDetails = async (): Promise<any> => {
  const orderDetails = await myDataSource.getRepository(OrderDetails)
    .createQueryBuilder("orderDetails")
    .innerJoinAndSelect(
      "orderDetails.orderItemDetails",
      "orderItemDetails"
    )
    .innerJoinAndSelect(
      "orderItemDetails.color",
      "color"
    )
    .leftJoinAndSelect(
      "orderItemDetails.size",
      "size"
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
    .getOne()

  console.log("orderDetails : ", orderDetails);

  return orderDetails;
}
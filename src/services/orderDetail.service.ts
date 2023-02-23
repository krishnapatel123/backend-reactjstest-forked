import { myDataSource } from '../data-source';
import { OrderDetails } from '../entities/orderDetails.entity';
import { OrderItems } from '../entities/orderItems.entity';
import { orderDetailsType } from '../types/orderDetails.type';

export const addOrderDetails = async (orderDetailsObj: orderDetailsType) => {
  await myDataSource
    .createQueryBuilder()
    .insert()
    .into(OrderDetails)
    .values({
      userData: orderDetailsObj.userId as never,
      shippingDetails: orderDetailsObj.shippingId as never,
      checkoutDetails: orderDetailsObj.checkoutId as never,
      total: orderDetailsObj.total
    })
    .execute().then(async (res) => {
      const lastInsertedOrderId = res?.identifiers[0].id

      await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
        orderDetails: lastInsertedOrderId,
        product: orderDetailsObj.productId as never,
        quantity: orderDetailsObj.quanity,
        color: orderDetailsObj.colorId as never,
        size: orderDetailsObj.sizeId as never,
      }).execute().then(async (res) => {
        console.log("after save obj : ", res);
        return res;
      })
    });
}
export const getOrderDetails = async (): Promise<OrderDetails> => {
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
      "orderItemDetails.product",
      "product"
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
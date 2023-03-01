import { myDataSource } from '../data-source';
import { Cart } from '../entities/cart.entity';
import { OrderDetails } from '../entities/orderDetails.entity';
import { OrderItems } from '../entities/orderItems.entity';
import { UserData } from '../entities/user.entity';
import { orderDetailsType } from '../types/orderDetails.type';

export const addOrderDetails = async (orderDetailsObj: orderDetailsType) => {
  console.log("orderDetailobj : ", orderDetailsObj);
  await myDataSource.createQueryBuilder().insert().into(OrderDetails).values({
    userData: orderDetailsObj.information.userId,
    total: orderDetailsObj.information.total,
    shippingDetail: orderDetailsObj.information.shippingId,
    checkoutDetail: orderDetailsObj.information.checkoutId,
  }).execute().then(async (res) => {
    console.log("after sav order details : ", res);
    if (res) {
      orderDetailsObj.productList.map(async (product) => {
        await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
          products: product.productId,
          quantity: product.quantity,
          color: product.colorId,
          size: product.sizeId,
          orderDetail: res.identifiers[0].id
        }).execute().then(async (res) => {
          console.log("after save prder items obj : ");
          //delete cart and cartitem table
        })
      })
      const cart = await myDataSource.getRepository(Cart).findOne({ where: { userData: orderDetailsObj.information.userId } });
      return await myDataSource.getRepository(Cart).createQueryBuilder("cart").delete().where("id = :id", { id: cart.id }).execute();
    }
  });
  return;

}
// export const getOrderDetails = async (userId: string): Promise<any> => {
//   const orderDetails = await myDataSource.getRepository(OrderDetails)
//     .createQueryBuilder("orderDetails")
//     .innerJoinAndSelect(
//       "orderDetails.orderItemDetails",
//       "orderItemDetails"
//     )
//     .innerJoinAndSelect(
//       "orderDetails.userData",
//       "userData"
//     )
//     .innerJoinAndSelect(
//       "orderDetails.shippingDetails",
//       "shippingDetails"
//     )
//     .innerJoinAndSelect(
//       "orderDetails.checkoutDetails",
//       "checkoutDetails"
//     )
//     .leftJoinAndSelect(
//       "orderItemDetails.product",
//       "product"
//     )
//     .leftJoinAndSelect(
//       "orderItemDetails.size",
//       "size"
//     )
//     .leftJoinAndSelect(
//       "orderItemDetails.color",
//       "color"
//     )
//     .where("orderDetails.userId = :query", { query: userId })

//   return orderDetails;
// }
import { myDataSource } from '../data-source';
import { Cart } from '../entities/cart.entity';
import { OrderDetails } from '../entities/orderDetails.entity';
import { OrderItems } from '../entities/orderItems.entity';
import { UserData } from '../entities/user.entity';
import { orderDetailsType } from '../types/orderDetails.type';

export const addOrderDetails = async (orderDetailsObj: orderDetailsType) => {
  console.log("1111111111 orderDetailobj : ", orderDetailsObj);
  await myDataSource.createQueryBuilder().insert().into(OrderDetails).values({
    userData: orderDetailsObj.userId,
    total: orderDetailsObj.totalInfo.grandTotal,
    shippingDetail: orderDetailsObj.shippingId,
    checkoutDetail: orderDetailsObj.checkoutId,
  }).execute().then(async (res) => {
    console.log("22222222 after sav order details : ", res);
    if (res) {
      orderDetailsObj.cartItemsDetails.map(async (product) => {
        await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
          products: product.productId,
          quantity: product.quantity,
          color: product.color,
          size: product.size,
          orderDetail: res.identifiers[0].id
        }).execute().then(async (res) => {
          console.log("33333 after save prder items obj : ");
          //delete cart and cartitem table
        })
      })
      const cart = await myDataSource.getRepository(Cart).findOne({ where: { userData: orderDetailsObj.userId } });
      const d = await myDataSource.getRepository(Cart).createQueryBuilder("cart").delete().where("id = :id", { id: cart.id }).execute();
      console.log("$$$$$$$$ FINAL RESP $$$$$$$$$$$$$$$$ : ", d);

      return d;
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
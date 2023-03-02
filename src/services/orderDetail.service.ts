import { myDataSource } from '../data-source';
import { Cart } from '../entities/cart.entity';
import { OrderDetails } from '../entities/orderDetails.entity';
import { OrderItems } from '../entities/orderItems.entity';
import { orderDetailsType } from '../types/orderDetails.type';

export const addOrderDetails = async (orderDetailsObj: orderDetailsType) => {
  try {
    await myDataSource.createQueryBuilder().insert().into(OrderDetails).values({
      userData: orderDetailsObj.userId,
      total: orderDetailsObj.totalInfo.grandTotal,
      shippingDetail: orderDetailsObj.shippingId,
      checkoutDetail: orderDetailsObj.checkoutId,
    }).execute().then(async (res) => {
      if (res) {
        orderDetailsObj.cartItemsDetails.map(async (product) => {
          await myDataSource.createQueryBuilder().insert().into(OrderItems).values({
            products: product.productId,
            quantity: product.quantity,
            color: product.color,
            size: product.size,
            orderDetail: res.identifiers[0].id
          }).execute().then(async (res) => {
            const cart = await myDataSource.getRepository(Cart).findOne({ where: { userData: orderDetailsObj.userId } });
            await myDataSource.getRepository(Cart).createQueryBuilder("cart").delete().where("id = :id", { id: cart.id }).execute();
            return 'Successfully place order';
          })
        })
      }
    });
  } catch (error) {
    return error.message
  }
}
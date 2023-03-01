import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';
import { categoryLists } from '../data/categoryLists';
import { Cart } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';
import { UserData } from '../entities/user.entity';

export const addToCartProduct = async (cartDetails): Promise<any> => {
  const cartRepository = myDataSource.getRepository(Cart)
  const cartItemsRepository = myDataSource.getRepository(CartItems)

  console.log("req.body cartDetails : ", cartDetails);

  const cartData = await cartRepository.findOne({
    where: { userDataId: cartDetails.userId }
  });
  console.log("userid cart data : ", cartData);

  if (cartData) {
    //add to cartitem
    console.log("if condi alrdy exist cart ");
    const checkProduct = await myDataSource.getRepository(CartItems)
      .createQueryBuilder("cartItems")
      .where("cartItems.productsId = :productId", { productId: cartDetails.productId })
      .andWhere("cartItems.size = :size", { size: cartDetails.size })
      .andWhere("cartItems.color = :color", { color: cartDetails.color })
      .getOne()
    console.log("check product alrdy exists in cartitems ? ", checkProduct);

    if (checkProduct) {
      await myDataSource
        .createQueryBuilder()
        .update(CartItems)
        .set({ quantity: checkProduct.quantity + 1 })
        .where("id = :id", { id: checkProduct.id })
        .execute().then((response) => {
          // console.log("after quantity update record : ", response);
          return response;
        })
    } else {
      const cartItem = new CartItems();
      cartItem.cart = cartData.id;
      cartItem.products = cartDetails.productId;
      cartItem.quantity = cartDetails.quantity;
      cartItem.size = cartDetails.size;
      cartItem.color = cartDetails.color;
      return await cartItemsRepository.save(cartItem);
    }
  } else {
    //createcart and then add to cartitems
    console.log("else condi create cart and add item ", typeof cartDetails.userId, cartDetails.userId);
    const cart = new Cart();
    cart.userDataId = parseInt(cartDetails.userId);
    const result = await cartRepository.save(cart);
    if (result) {
      const cartItem = new CartItems();
      cartItem.cart = result.id;
      cartItem.products = cartDetails.productId;
      cartItem.quantity = cartDetails.quantity;
      cartItem.size = cartDetails.size;
      cartItem.color = cartDetails.color;
      return await cartItemsRepository.save(cartItem);
    }
  }
  // return cartDetails;
}

export const updateCartDetails = async (updatedData: { id: number, quantity?: string, size?: number, color?: number }): Promise<any> => {
  if (updatedData.quantity) {
    let updateProduct = await myDataSource.getRepository(CartItems).createQueryBuilder("cartItems").where("cartItems.id = :id", { id: updatedData.id }).getOne();
    const updatedResult = await myDataSource
      .createQueryBuilder()
      .update(CartItems)
      .set({ quantity: updatedData.quantity === 'add' ? updateProduct.quantity + 1 : updateProduct.quantity - 1 })
      .where("id = :id", { id: updatedData.id })
      .execute()
    console.log("after quantity update record : ", updatedResult);
    return updatedResult;
  }
  if (updatedData.size) {
    const updatedResult = await myDataSource
      .createQueryBuilder()
      .update(CartItems)
      .set({ size: updatedData.size })
      .where("id = :id", { id: updatedData.id })
      .execute()
    console.log("after size update record : ", updatedResult);
    return updatedResult;
  }
  if (updatedData.color) {
    const updatedResult = await myDataSource
      .createQueryBuilder()
      .update(CartItems)
      .set({ color: updatedData.color })
      .where("id = :id", { id: updatedData.id })
      .execute()
    console.log("after color update record : ", updatedResult);
    return updatedResult;
  }
}

export const deleteCartDetails = async (id: number) => {
  return await myDataSource
    .createQueryBuilder()
    .delete()
    .from(CartItems)
    .where("id = :id", { id: id })
    .execute()
}
export const getCartDetails = async (userId): Promise<any> => {
  const data = myDataSource.getRepository(UserData).
    createQueryBuilder("userData").
    select().
    leftJoinAndSelect("userData.cart", "Cart").
    leftJoinAndSelect("Cart.cartItems", "Cartitems").
    leftJoinAndSelect("Cartitems.products", "products").
    where("Cart.userDataId = :query", { query: parseInt(userId) }).
    getMany()
  return data;
}
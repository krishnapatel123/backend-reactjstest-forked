import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';
import { categoryLists } from '../data/categoryLists';
import { Cart } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';
import { UserData } from '../entities/user.entity';

export const addToCartProduct = async (cartDetails): Promise<string> => {
  const cartRepository = myDataSource.getRepository(Cart)
  const cartItemsRepository = myDataSource.getRepository(CartItems)

  console.log("userId : ", cartDetails);

  const cartData = await cartRepository.findOne({
    where: { userDataId: cartDetails.userId }
  });
  console.log("userid cart data : ", cartData);

  if (cartData) {
    //add to cartitem
    console.log("if condi alrdy exist cart ");
    const cartItem = new CartItems();
    cartItem.cart = cartData.id;
    cartItem.products = cartDetails.productId;
    cartItem.quantity = cartDetails.quantity;
    cartItem.size = cartDetails.size;
    cartItem.color = cartDetails.color;
    await cartItemsRepository.save(cartItem);

  } else {
    //createcart and then add to cartitems
    console.log("else condi create cart and add item ");
    const cart = new Cart();
    cart.userDataId = cartDetails.userId;
    const result = await cartRepository.save(cart);
    if (result) {
      const cartItem = new CartItems();
      cartItem.cart = result.id;
      cartItem.products = cartDetails.productId;
      cartItem.quantity = cartDetails.quantity;
      cartItem.size = cartDetails.size;
      cartItem.color = cartDetails.color;
      await cartItemsRepository.save(cartItem);
    }
  }
  return 'successfully created cart and add item to it';
}

export const updateCartDetails = async (udpateData): Promise<any> => {
  return;
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
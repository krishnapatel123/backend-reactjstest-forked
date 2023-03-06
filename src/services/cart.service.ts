import { myDataSource } from '../data-source';
import { Cart } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';
import { Product } from '../entities/product.entity';
import { addCartDataType, updateCartDataType } from '../types/cart.type';

export const addToCartProduct = async (cartDetails: addCartDataType) => {
  try {
    const cartRepository = myDataSource.getRepository(Cart);
    const cartData = await cartRepository.createQueryBuilder("cart").where({ userDataId: cartDetails.userId }).getOne();
    if (cartData) {
      //add to cartitem
      const checkProduct = await myDataSource
        .getRepository(CartItems)
        .createQueryBuilder("cartItems")
        .where("cartItems.productsId = :productId", { productId: cartDetails.productId })
        .andWhere("cartItems.size = :size", { size: cartDetails.size })
        .andWhere("cartItems.color = :color", { color: cartDetails.color })
        .getOne()
      if (checkProduct) {
        await myDataSource
          .createQueryBuilder()
          .update(CartItems)
          .set({ quantity: checkProduct.quantity + 1 })
          .where("id = :id", { id: checkProduct.id })
          .returning('*')
          .execute()
      } else {
        await myDataSource
          .getRepository(CartItems)
          .createQueryBuilder("CartItems")
          .insert()
          .values({
            cart: cartData.id,
            products: cartDetails.productId,
            quantity: cartDetails.quantity,
            size: cartDetails.size,
            color: cartDetails.color
          })
          .returning('*')
          .execute();
      }
    } else {
      //createcart and then add to cartitems
      const cart = new Cart();
      cart.userDataId = cartDetails.userId;
      const result = await cartRepository.save(cart);
      if (result) {
        await myDataSource
          .getRepository(CartItems)
          .createQueryBuilder("CartItems")
          .insert()
          .values({
            cart: result.id,
            products: cartDetails.productId,
            quantity: cartDetails.quantity,
            size: cartDetails.size,
            color: cartDetails.color
          })
          .returning('*')
          .execute();
      }
    }
    const res = await getCartDetails(cartDetails.userId);
    return res;
  } catch (error) {
    return error.message
  }
}

export const updateCartDetails = async (updatedData: updateCartDataType) => {
  try {
    let result;
    if (updatedData.quantity) {
      let updateProduct = await myDataSource
        .getRepository(CartItems)
        .createQueryBuilder("cartItems")
        .where("cartItems.id = :id", { id: updatedData.id })
        .getOne();
      const updatedResult = await myDataSource
        .createQueryBuilder()
        .update(CartItems)
        .set({ quantity: updatedData.quantity === 'add' ? updateProduct.quantity + 1 : updateProduct.quantity - 1 })
        .where("id = :id", { id: updatedData.id })
        .returning('*')
        .execute()
      result = updatedResult.raw[0];
    }
    if (updatedData.size) {
      const updatedResult = await myDataSource
        .createQueryBuilder()
        .update(CartItems)
        .set({ size: updatedData.size })
        .where("id = :id", { id: updatedData.id })
        .returning('*')
        .execute()
      result = updatedResult.raw[0];
    }
    if (updatedData.color) {
      const updatedResult = await myDataSource
        .createQueryBuilder()
        .update(CartItems)
        .set({ color: updatedData.color })
        .where("id = :id", { id: updatedData.id })
        .returning('*')
        .execute()
      result = updatedResult.raw[0];
    }
    if (result) {
      const res = await getCartDetails(updatedData.userId);
      return res;
    }
  } catch (error) {
    return error.message
  }
}

export const deleteCartDetails = async (userId: number, productId: number) => {
  try {
    const data = await myDataSource
      .createQueryBuilder()
      .delete()
      .from(CartItems)
      .where("id = :id", { id: productId })
      .returning('*')
      .execute()
    if (data) {
      const res = await getCartDetails(userId);
      return res;
    }
  } catch (error) {
    return error.message
  }
}
export const getCartDetails = async (userId) => {
  try {
    const cartProductData = await myDataSource
      .getRepository(Cart)
      .createQueryBuilder('cart')
      .select(['cart.id', 'cartItems.id', 'products.id', 'cartItems.quantity', 'cartItems.size', 'cartItems.color', 'products.productCurrentPrice'])
      .leftJoin('cart.cartItems', 'cartItems')
      .leftJoin('cartItems.products', 'products')
      .where("cart.userDataId = :id", { id: userId })
      .orderBy('cartItems.id', 'ASC')
      .getMany();
    let finalRes = [];
    let totalInfo = {
      grandTotal: 0,
      subTotal: 0,
      Shipping: 64,
      VatAndTax: 64
    }
    cartProductData.map(async (cartProduct) => {
      cartProduct.cartItems.map((cartItems: CartItems & { products: Product }) => {
        let productData = {
          id: 0,
          cartId: 0,
          quantity: 0,
          size: 0,
          color: 0,
          productId: 0
        };
        productData.cartId = cartProduct.id;
        productData.id = cartItems.id;
        productData.quantity = cartItems.quantity;
        productData.size = cartItems.size;
        productData.color = cartItems.color;
        productData.productId = cartItems.products.id;
        totalInfo.subTotal += cartItems.quantity * cartItems.products.productCurrentPrice;
        finalRes.push(productData);
      })
    })
    totalInfo.grandTotal = totalInfo.subTotal + totalInfo.Shipping + totalInfo.VatAndTax;
    let response = { cartItemsDetails: finalRes, totalInfo: totalInfo }
    return response;
  } catch (error) {
    return error.message
  }
}
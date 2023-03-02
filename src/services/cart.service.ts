import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';
import { categoryLists } from '../data/categoryLists';
import { Cart } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';
import { UserData } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

export const addToCartProduct = async (cartDetails): Promise<any> => {
  const cartRepository = myDataSource.getRepository(Cart)
  const cartItemsRepository = myDataSource.getRepository(CartItems)

  // console.log("req.body cartDetails : ", cartDetails);

  const cartData = await cartRepository.findOne({
    where: { userDataId: cartDetails.userId }
  });
  // console.log("userid cart data : ", cartData);

  if (cartData) {
    //add to cartitem
    // console.log("if condi alrdy exist cart ");
    const checkProduct = await myDataSource.getRepository(CartItems)
      .createQueryBuilder("cartItems")
      .where("cartItems.productsId = :productId", { productId: cartDetails.productId })
      .andWhere("cartItems.size = :size", { size: cartDetails.size })
      .andWhere("cartItems.color = :color", { color: cartDetails.color })
      .getOne()
    // console.log("check product alrdy exists in cartitems ? ", checkProduct);

    if (checkProduct) {
      const updatedData = await myDataSource
        .createQueryBuilder()
        .update(CartItems)
        .set({ quantity: checkProduct.quantity + 1 })
        .where("id = :id", { id: checkProduct.id })
        .returning('*')
        .execute()
      // console.log("updatedData : ", updatedData.raw[0]);

      // return updatedData.raw[0];
    } else {
      const addProduct = await myDataSource.getRepository(CartItems).createQueryBuilder("CartItems").insert().values({
        cart: cartData.id,
        products: cartDetails.productId,
        quantity: cartDetails.quantity,
        size: cartDetails.size,
        color: cartDetails.color
      }).returning('*').execute();
      // const cartItem = new CartItems();
      // cartItem.cart = cartData.id;
      // cartItem.products = cartDetails.productId;
      // cartItem.quantity = cartDetails.quantity;
      // cartItem.size = cartDetails.size;
      // cartItem.color = cartDetails.color;
      // return await cartItemsRepository.save(cartItem);
      // console.log("add data to cart alrdy existis cart ################## : ", addProduct.raw[0]);
      // return addProduct.raw[0];

    }
  } else {
    //createcart and then add to cartitems
    // console.log("else condi create cart and add item ", typeof cartDetails.userId, cartDetails.userId);
    const cart = new Cart();
    cart.userDataId = parseInt(cartDetails.userId);
    const result = await cartRepository.save(cart);
    if (result) {

      const addProduct = await myDataSource.getRepository(CartItems).createQueryBuilder("CartItems").insert().values({
        cart: result.id,
        products: cartDetails.productId,
        quantity: cartDetails.quantity,
        size: cartDetails.size,
        color: cartDetails.color
      }).returning('*').execute();

      // const cartItem = new CartItems();
      // cartItem.cart = result.id;
      // cartItem.products = cartDetails.productId;
      // cartItem.quantity = cartDetails.quantity;
      // cartItem.size = cartDetails.size;
      // cartItem.color = cartDetails.color;
      // return await cartItemsRepository.save(cartItem);

      // console.log("add data to cart alrdy existis cart ################## : ", addProduct.raw[0]);
      // return addProduct.raw[0];
    }
  }
  // return cartDetails;

  const res = await getCartDetails(cartDetails.userId);
  return res;
}

export const updateCartDetails = async (updatedData: { id: number, quantity?: string, size?: number, color?: number }): Promise<any> => {
  // console.log("udpatedData @@@@@@@@@@ : ", updatedData);

  let result;
  if (updatedData.quantity) {
    let updateProduct = await myDataSource.getRepository(CartItems).createQueryBuilder("cartItems").where("cartItems.id = :id", { id: updatedData.id }).getOne();
    const updatedResult = await myDataSource
      .createQueryBuilder()
      .update(CartItems)
      .set({ quantity: updatedData.quantity === 'add' ? updateProduct.quantity + 1 : updateProduct.quantity - 1 })
      .where("id = :id", { id: updatedData.id })
      .returning('*')
      .execute()
    // console.log("after quantity update record : ", updatedResult.raw[0]);
    // return updatedResult.raw[0];
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
    // console.log("after size update record : ", updatedResult.raw[0]);
    result = updatedResult.raw[0];
    // return updatedResult.raw[0];
  }
  if (updatedData.color) {
    const updatedResult = await myDataSource
      .createQueryBuilder()
      .update(CartItems)
      .set({ color: updatedData.color })
      .where("id = :id", { id: updatedData.id })
      .returning('*')
      .execute()
    // console.log("after color update record : ", updatedResult.raw[0]);
    result = updatedResult.raw[0];
    // return updatedResult.raw[0];
  }
  // console.log("after update record : ", result);
  if (result) {
    const userData = await myDataSource.getRepository(Cart).find({ where: { id: result.cartId } });
    if (userData) {
      // console.log("userData @@@@@@@@@@@@@@@@@ : ", userData[0].userDataId);

      const res = await getCartDetails(userData[0].userDataId);
      return res;
    }
  }
}

export const deleteCartDetails = async (id: number) => {
  const data = await myDataSource
    .createQueryBuilder()
    .delete()
    .from(CartItems)
    .where("id = :id", { id: id })
    .returning('*')
    .execute()

  // console.log("data DELETETTTTTTTTTTTT : ", data.raw[0]);
  if (data) {
    const userData = await myDataSource.getRepository(Cart).find({ where: { id: data.raw[0].cartId } });
    if (userData) {
      // console.log("userData @@@@@@@@@@@@@@@@@ : ", userData[0].userDataId);

      const res = await getCartDetails(userData[0].userDataId);
      return res;
    }

  }

}
export const getCartDetails = async (userId): Promise<any> => {
  // const data = await myDataSource.getRepository(UserData).
  // console.log("called get api func : ", userId);

  // const data = await myDataSource.getRepository(UserData).createQueryBuilder('userData')
  //   .select(['cart.id', 'userData.id', 'cartItems.id', 'products.id', 'cartItems.quantity', 'cartItems.size', 'cartItems.color'])
  //   .leftJoin('userData.cart', 'cart')
  //   .leftJoin('cart.cartItems', 'cartItems')
  //   .leftJoin('cartItems.products', 'products')
  //   .where("cart.userDataId = :id", { id: userId })
  //   .getMany();

  const data = await myDataSource.getRepository(Cart).createQueryBuilder('cart')
    .select(['cart.id', 'cartItems.id', 'products.id', 'cartItems.quantity', 'cartItems.size', 'cartItems.color', 'products.productCurrentPrice'])
    .leftJoin('cart.cartItems', 'cartItems')
    .leftJoin('cartItems.products', 'products')
    .where("cart.userDataId = :id", { id: userId })
    .getMany();

  // console.log("as,aljkdbf,sjvnz,m", data);
  // return data;
  let finalRes = [];
  let totalInfo = {
    grandTotal: 0,
    subTotal: 0,
    Shipping: 64,
    VatAndTax: 64
  }
  data.map(async (d) => {
    d.cartItems.map((c: CartItems & { products: Product }) => {
      let obj = {
        id: 0,
        cartId: 0,
        quantity: 0,
        size: 0,
        color: 0,
        productId: 0
      };
      obj.cartId = d.id;
      obj.id = c.id;
      obj.quantity = c.quantity;
      obj.size = c.size;
      obj.color = c.color;
      obj.productId = c.products.id;
      totalInfo.subTotal += c.quantity * c.products.productCurrentPrice;
      finalRes.push(obj);
    })
  })
  totalInfo.grandTotal = totalInfo.subTotal + totalInfo.Shipping + totalInfo.VatAndTax;
  let response = { cartItemsDetails: finalRes, totalInfo: totalInfo }
  // console.log("data response : ", response);
  return response;

  // findOne({
  //   relations: ['Cart', 'CartItems',],
  //   loadRelationIds: true,
  //   select: ["cartitems.userDataId", "Cartitems.cart", "Cartitems.id", "Cartitems.productsId", "Cartitems.size", "Cartitems.color"],
  //   where: {}
  // })


  // createQueryBuilder("userData").
  // leftJoinAndSelect("userData.cart", "Cart").
  // leftJoin("Cart.cartItems", "Cartitems").
  // // leftJoinAndSelect("Cartitems.products", "products").
  // where("Cart.userDataId = :query", { query: parseInt(userId) }).
  // // select(["cartitems.userDataId", "Cartitems.cart", "Cartitems.id", "Cartitems.productsId", "Cartitems.size", "Cartitems.color"]).
  // getMany();
  // console.log("get cart details AAAAAAA : ", data);

  // if (data) {
  //   const res = new Promise((resolve, reject) => {
  //     let finalRes = [];
  //     data.map((d) => {
  //       d.cartItems.map((c: CartItems & { products: Product }) => {
  //         let obj = {
  //           id: 0,
  //           cartId: 0,
  //           quantity: 0,
  //           size: 0,
  //           color: 0,
  //           productId: 0
  //         };
  //         obj.cartId = d.id;
  //         obj.id = c.id;
  //         obj.quantity = c.quantity;
  //         obj.size = c.size;
  //         obj.color = c.color;
  //         obj.productId = c.products.id;
  //         finalRes.push(obj);
  //       })
  //     })
  //     console.log("data response : ", finalRes);
  //     resolve(finalRes);
  //   })
  //   res.then((finalResponse) => { return finalResponse })
  // }
}

// export const getCartProductDetails = async (productId: number) => {
//   if (productId) {
//     // const res = await myDataSource.getRepository(Product).find({ where: { id: filters.id } }, { relations: { brand: true, gender: true, category: true } });
//     const res = await myDataSource.getRepository(CartItems).createQueryBuilder("cartItems").leftJoinAndSelect(Product, "product").where("cartItems.id = :id", { id: productId }).getMany();

//     console.log("if single product detail get resp : ", res);
//     return { filterData: res };
//   }
// }
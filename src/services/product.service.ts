import { myDataSource } from '../data-source';
import { productLists } from '../data/productLists';
import { Product } from '../entities/product.entity';
import { productsType } from '../types/products.type';
import { CartItems } from '../entities/cartItems.entity';

export const pagination = async (page: number, per_page: number, lengthData: number) => {
  let count = Math.ceil(lengthData / per_page);
  let indexOfLastRecord = page * per_page;
  let indexOfFirstRecord = indexOfLastRecord - per_page;
  return ({ count, indexOfLastRecord, indexOfFirstRecord });
}
export const getAllProductList = async (filters): Promise<{ filterData: Product | Product[] | CartItems[], totalCount?: number, priceRange?: { min: number, max: number } }> => {
  // console.log("service product get api fitlers : ", filters);

  if (filters.type === 'bestDeal') {
    const res = await myDataSource.getRepository(Product).createQueryBuilder("product").where({ type: 2 }).getMany(); //find({ where: { type: 2 } });
    return { filterData: res };
  }
  else if (filters.type === 'bestSeller') {
    const res = await myDataSource.getRepository(Product).find({ where: { type: 3 } });
    return { filterData: res };
  }
  else if (filters.type === 'checkoutNewArrivals') {
    const res = await myDataSource.getRepository(Product).find({ where: { type: 1 } });
    return { filterData: res };
  }
  else if (filters.gender && filters.category && typeof filters.category !== 'object' && filters.page && filters.per_page) {
    console.log("filters inside else if : ", filters);

    const res = await myDataSource
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.gender = :genderId", { genderId: parseInt(filters.gender) })
      .andWhere("product.category = :categoryId", { categoryId: parseInt(filters.category) })
      .getMany()
    // console.log("gender and category filters res : ", res.length);
    let data = pagination(filters.page, filters.per_page, res.length);
    let finalPaginateData = res.slice((await data).indexOfFirstRecord, (await data).indexOfLastRecord)
    // console.log("finalPaginateData : ", finalPaginateData.length);
    return { filterData: finalPaginateData, totalCount: res.length };
  }
  else if (filters.gender && filters.category && typeof filters.category !== 'object') {
    const res = await myDataSource
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.gender = :genderId", { genderId: parseInt(filters.gender) })
      .andWhere("product.category = :categoryId", { categoryId: parseInt(filters.category) })
      .getMany()
    // console.log("gender and category filters res : ", res.length);
    return { filterData: res };
  }
  else if (filters?.brandFilters || filters?.categoryFilters || filters?.sizeFilters || filters?.priceFilters || filters.gender) {

    let res = await myDataSource
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.gender = :genderId", { genderId: parseInt(filters.gender) })
    // .andWhere("product.productCurrentPrice >= :price", { price: filters?.priceFilters[0] })
    // .andWhere("product.productCurrentPrice <= :price", { price: filters?.priceFilters[1] })
    // .orWhere("product.category In (:...categories)", { categories: filters?.categoryFilters })
    // .orWhere("product.brand In (:...brands)", { brands: filters?.brandFilters })
    // .getMany()

    // if (filters?.gender) {
    //   res.where("product.gender = :genderId", { genderId: parseInt(filters?.gender) })
    // }
    if (filters?.priceFilters) {
      res.andWhere("product.productCurrentPrice >= :price", { price: filters?.priceFilters[0] })
        .andWhere("product.productCurrentPrice <= :price", { price: filters?.priceFilters[1] })
    }
    if (filters?.categoryFilters) {
      res.orWhere("product.category In (:...categories)", { categories: filters?.categoryFilters });
    }
    if (filters?.brandFilters) {
      res.orWhere("product.brand In (:...brands)", { brands: filters?.brandFilters });
    }
    if (filters?.sizeFilters) {
      res.orWhere("product.size In (:...sizes)", { sizes: filters?.sizeFilters });
    }
    const result = await res.getMany();
    // console.log("result : ", result.length);

    const priceRange = await myDataSource.getRepository(Product).createQueryBuilder("product")
      .select("MAX(product.productCurrentPrice)")
      .addSelect("MIN(product.productCurrentPrice)").getRawOne();
    // console.log("priceRangeData : ", priceRange);

    if (result.length > 0 && priceRange) {
      // console.log("gender and category filters res : ", result.length);
      let data = await pagination(filters.page, filters.per_page, result.length);
      let finalPaginateData = result.slice(data.indexOfFirstRecord, data.indexOfLastRecord)
      // console.log("finalPaginateData : ", finalPaginateData.length);
      return { filterData: finalPaginateData, totalCount: result.length, priceRange: priceRange };
    }
    return;
  }
  else if (filters.id) {
    console.log("STARTTTTTTTTTTTTT : ");
    const res = await myDataSource.getRepository(Product).find({ where: { id: filters.id } });
    // const res = await myDataSource.getRepository(CartItems).createQueryBuilder("cartItems").leftJoinAndSelect(Product, "product").where("cartItems.id = :id", { id: filters.id }).getMany();


    // const res = await myDataSource.getRepository(CartItems)
    //   .createQueryBuilder("cartItems")
    //   .leftJoinAndSelect("cartItems.products", "product")
    //   .where("cartItems.products = :id", { id: filters.id })
    //   .getMany();

    console.log("RESPONSEEEEEEEEEEEE  : ", res[0]);
    return { filterData: res[0] };
  }
  else {
    const res = await myDataSource.getRepository(Product).find({ relations: { brand: true, gender: true, category: true } });
    // console.log("else resp no filters : ", res.length);
    return { filterData: res };
    // return await productRepository.find({ relations: { brand: true, gender: true, category: true } });
  }
  // productLists.map(async (p) => {
  //   const product = new Product();
  //   product.productName = p.productName;
  //   product.productImages = p.productImages;
  //   product.productDescription = p.productDescription;
  //   product.productOriginalPrice = p.productOriginalPrice;
  //   product.productCurrentPrice = p.productCurrentPrice;
  //   product.gender = p.gender;
  //   product.category = p.category;
  //   product.brand = p.brand;
  //   product.size = p.size;
  //   product.color = p.color;
  //   product.reviewRate = p.reviewRate;
  //   product.slug = p.slug;
  //   product.type = p.type;
  //   let data = await productRepository.save(product);
  //   return data;
  // })
  // return;
}

export const addProduct = async (productObj: productsType): Promise<Product> => {
  const productRepository = myDataSource.getRepository(Product)
  const product = new Product();
  product.productName = productObj.productName;
  product.productImages = productObj.productImages;
  product.productDescription = productObj.productDescription;
  product.productOriginalPrice = productObj.productOriginalPrice;
  product.productCurrentPrice = productObj.productCurrentPrice;
  product.gender = productObj.gender;
  product.category = productObj.category;
  product.brand = productObj.brand;
  product.size = productObj.size;
  product.color = productObj.color;
  product.reviewRate = productObj.reviewRate;
  product.slug = productObj.slug;
  product.type = productObj.type;
  return productRepository.save(product);
}

export const getAllCartProductList = async (filters): Promise<{ filterData: any }> => {
  // console.log("STARTTTTTTTTTTTTT : "), filters;

  const res = await myDataSource.getRepository(CartItems)
    .createQueryBuilder("cartItems")
    .leftJoinAndSelect("cartItems.products", "product")
    .where("cartItems.cartId = :id", { id: filters.id })
    .getMany();

  // console.log("if single product detail get resp : ", res);

  // const extraChanges = {
  //   Shipping: 64,
  //   vatAndTax: 64,
  // };
  // let grandTotal = 0;
  // let subTotal = 0;
  // let result: { cartProductDetails, totalInfo } = {
  //   cartProductDetails: res,
  //   totalInfo: {}
  // };
  // result.cartProductDetails.map((r) => {
  //   console.log("r : ", r);
  //   const products: Product = r.products;
  //   subTotal += r.quantity * products.productCurrentPrice;
  // })
  // grandTotal = subTotal + extraChanges.Shipping + extraChanges.vatAndTax
  // result.totalInfo = {
  //   subTotal: subTotal,
  //   total: grandTotal,
  //   Shipping: 64,
  //   VatAndTax: 64
  // }
  // console.log("total :::::::::::::::::::::::::::: ", result);

  return { filterData: res };
}
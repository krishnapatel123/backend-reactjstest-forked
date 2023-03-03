import { myDataSource } from '../data-source';
import { Product } from '../entities/product.entity';
import { productsType } from '../types/products.type';
import { CartItems } from '../entities/cartItems.entity';

export const pagination = async (page: number, per_page: number, lengthData: number) => {
  let count = Math.ceil(lengthData / per_page);
  let indexOfLastRecord = page * per_page;
  let indexOfFirstRecord = indexOfLastRecord - per_page;
  return ({ count, indexOfLastRecord, indexOfFirstRecord });
}
export const getAllProductList = async (filters) => {
  try {
    if (filters.type === 'bestDeal') {
      const res = await myDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where({ type: 2 })
        .getMany();
      return { filterData: res };
    }
    else if (filters.type === 'bestSeller') {
      const res = await myDataSource
        .getRepository(Product)
        .find({ where: { type: 3 } });
      return { filterData: res };
    }
    else if (filters.type === 'checkoutNewArrivals') {
      const res = await myDataSource.
        getRepository(Product)
        .find({ where: { type: 1 } });
      return { filterData: res };
    }
    else if (filters.gender && (filters.category && typeof filters.category !== 'object' || filters.brand && typeof filters.brand !== 'object') && filters.page && filters.per_page) {
      let query = await myDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.gender = :genderId", { genderId: parseInt(filters.gender) });
      if (filters.category) {
        query.andWhere("product.category = :categoryId", { categoryId: parseInt(filters.category) })
      }
      if (filters.brand) {
        query.andWhere("product.brand = :brandId", { brandId: parseInt(filters.brand) })
      }
      let res = await query.getMany();
      let priceRange = [Math.min(...res.map(product => product.productCurrentPrice)), Math.max(...res.map(product => product.productCurrentPrice))]
      let data = pagination(filters.page, filters.per_page, res.length);
      let finalPaginateData = res.slice((await data).indexOfFirstRecord, (await data).indexOfLastRecord)
      return { filterData: finalPaginateData, totalCount: res.length, priceRange: priceRange };
    }
    else if (filters.gender && filters.category && typeof filters.category !== 'object') {
      const res = await myDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.gender = :genderId", { genderId: parseInt(filters.gender) })
        .andWhere("product.category = :categoryId", { categoryId: parseInt(filters.category) })
        .getMany()
      return { filterData: res };
    }
    else if (filters?.brandFilters || filters?.categoryFilters || filters?.sizeFilters || filters?.priceFilters && filters.gender && filters.page && filters.per_page) {
      let res = await myDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.gender = :genderId", { genderId: parseInt(filters.gender) })
      if (filters?.priceFilters) {
        res.andWhere("(product.productCurrentPrice >= :minprice AND product.productCurrentPrice <= :maxprice)", { minprice: filters?.priceFilters[0], maxprice: filters?.priceFilters[1] })
      }
      if (filters?.categoryFilters) {
        res.andWhere("product.category In (:...categories)", { categories: filters?.categoryFilters });
      }
      if (filters?.brandFilters) {
        res.andWhere("product.brand In (:...brands)", { brands: filters?.brandFilters });
      }
      if (filters?.sizeFilters) {
        res.andWhere("product.size In (:...sizes)", { sizes: filters?.sizeFilters });
      }
      const result = await res.getMany();
      let priceRange = [Math.min(...result.map(product => product.productCurrentPrice)), Math.max(...result.map(product => product.productCurrentPrice))]
      if (result.length > 0 && priceRange) {
        let data = await pagination(filters.page, filters.per_page, result.length);
        let finalPaginateData = result.slice(data.indexOfFirstRecord, data.indexOfLastRecord)
        return { filterData: finalPaginateData, totalCount: result.length, priceRange: priceRange };
      }
      return { filterData: [], totalCount: result.length, priceRange: [0, 0] };
    }
    else if (filters.id) {
      const res = await myDataSource
        .getRepository(Product)
        .find({ where: { id: filters.id } });
      return { filterData: res[0] };
    }
    else {
      const res = await myDataSource
        .getRepository(Product)
        .find({ relations: { brand: true, gender: true, category: true } });
      return { filterData: res };
    }
  } catch (error) {
    return error.message
  }

  //add product static to db
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

export const addProduct = async (productObj: productsType) => {
  try {
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
  } catch (error) {
    return error.message
  }
}

export const getAllCartProductList = async (filters) => {
  try {
    const res = await myDataSource.getRepository(CartItems)
      .createQueryBuilder("cartItems")
      .leftJoinAndSelect("cartItems.products", "product")
      .where("cartItems.cartId = :id", { id: filters.id })
      .getMany();
    return { filterData: res };
  } catch (error) {
    return error.message
  }
}
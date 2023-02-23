import { myDataSource } from '../data-source';
import { productLists } from '../data/productLists';
import { Product } from '../entities/product.entity';
import { productsType } from '../types/products.type';

export const getAllProductList = async (): Promise<Product[]> => {

  const productRepository = myDataSource.getRepository(Product)
  console.log("productlist length : ", productLists.length);

  // productLists.map(async (p) => {
  //   const product = new Product();
  //   product.productName = p.productName;
  //   product.productImages = p.productImages;
  //   product.productDescription = p.productDescription;
  //   product.productOriginalPrice = p.productOriginalPrice;
  //   product.productCurrentPrice = p.productCurrentPrice;
  //   product.gender = p.genderId as never;
  //   product.category = p.category as never;
  //   product.brand = p.brand as never;
  //   product.size = p.size;
  //   product.color = p.color;
  //   product.reviewRate = p.reviewRate;
  //   product.slug = p.slug;
  //   let data = await productRepository.save(product);
  //   return data;
  // })
  // return;
  return productRepository.find({ relations: { brand: true, gender: true, category: true } })
}

export const addProduct = async (productObj: productsType): Promise<Product> => {
  const productRepository = myDataSource.getRepository(Product)
  const product = new Product();
  product.productName = productObj.productName;
  product.productImages = productObj.productImages;
  product.productDescription = productObj.productDescription;
  product.productOriginalPrice = productObj.productOriginalPrice;
  product.productCurrentPrice = productObj.productCurrentPrice;
  product.gender = productObj.genderId as never;
  product.category = productObj.category as never;
  product.brand = productObj.brand as never;
  product.size = productObj.size;
  product.color = productObj.color;
  product.reviewRate = productObj.reviewRate;
  product.slug = productObj.slug;
  return productRepository.save(product);
}
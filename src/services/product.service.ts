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
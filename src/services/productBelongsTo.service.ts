import { myDataSource } from '../data-source';
import { Product } from '../entities/product.entity';
import { ProductBelongsTo } from '../entities/productBelongsTo.entity';
import { productsType } from '../types/products.type';
import { productBelongsToList } from '../data/productBelongsToLists';
export const getAllProductBelongsToList = async (): Promise<any> => {

  const productRepository = myDataSource.getRepository(ProductBelongsTo)

  // productBelongsToList.map((p) => {
  //   const pro = new ProductBelongsTo();
  //   pro.type = p.type;
  //   pro.products = p.productId as never
  //   return productRepository.save(pro);
  // })
  let d = productRepository.find({ relations: { products: true } });
  console.log("d length : ", (await d).length);
  return d;
  // return productRepository.find({ relations: { products: true } })
}

// export const addProductBelongsToList = async (productObj: { type: number, productId: number }): Promise<ProductBelongsTo> => {
//   const productRepository = myDataSource.getRepository(ProductBelongsTo)
//   const product = new ProductBelongsTo();
//   product.type = productObj.type;
//   product.products = productObj.productId as never;
//   return productRepository.save(product);
// }
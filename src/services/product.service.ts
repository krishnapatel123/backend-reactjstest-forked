import { myDataSource } from '../data-source';
import { productType } from '../types/product.type';
import { Product } from '../entities/product.entity';

const categoryProductList = [
  {
    productName: "Louis Vouiton active wear",
    imageSource: "/images/womenproduct1.png",
    productCurrentPrice: 715,
    productOriginalPrice: 1000,
    isLike: false,
    isNewArrival: true,
    genderId: 1,
    brandId: 4,
    categoryId: 2,
    sizeId: 1,
    colorId: 3,
    productDesc: "Product description 1",
    reviewRate: 3,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Shiny dress Givenchy",
    imageSource: "/images/womenproduct2.png",
    productCurrentPrice: 600,
    productOriginalPrice: 890,
    isLike: true,
    isNewArrival: true,
    genderId: 1,
    brandId: 2,
    categoryId: 4,
    sizeId: 2,
    colorId: 2,
    productDesc: "Product description",
    reviewRate: 2,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Red dress Valentino",
    imageSource: "/images/womenproduct8.png",
    productCurrentPrice: 711,
    productOriginalPrice: 910,
    isLike: false,
    isNewArrival: true,
    genderId: 3,
    brandId: 5,
    categoryId: 1,
    sizeId: 3,
    colorId: 4,
    productDesc: "Product description 1",
    reviewRate: 5,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Shiny dress Givenchy",
    imageSource: "/images/womenproduct9.png",
    productCurrentPrice: 711,
    productOriginalPrice: 910,
    isLike: false,
    isNewArrival: true,
    genderId: 3,
    brandId: 7,
    categoryId: 1,
    sizeId: 3,
    colorId: 7,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Dolce&Gabbana Dress ",
    imageSource: "/images/womenproduct3.png",
    productCurrentPrice: 711,
    productOriginalPrice: 910,
    isLike: false,
    isNewArrival: true,
    genderId: 4,
    brandId: 8,
    categoryId: 2,
    sizeId: 1,
    colorId: 3,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Elegant dress Dries van Noten ",
    imageSource: "/images/womenproduct4.png",
    productCurrentPrice: 711,
    productOriginalPrice: 910,
    isLike: false,
    isNewArrival: true,
    genderId: 2,
    brandId: 5,
    categoryId: 1,
    sizeId: 3,
    colorId: 2,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Women's white jacket",
    imageSource: "/images/womenproduct5.png",
    productCurrentPrice: 230,
    productOriginalPrice: 650,
    isLike: false,
    isNewArrival: true,
    genderId: 3,
    brandId: 9,
    categoryId: 1,
    sizeId: 2,
    colorId: 7,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Black Valentino dress with tulle",
    imageSource: "/images/womenproduct6.png",
    productCurrentPrice: 230,
    productOriginalPrice: 650,
    isLike: false,
    isNewArrival: true,
    genderId: 1,
    brandId: 7,
    categoryId: 1,
    sizeId: 1,
    colorId: 3,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
  {
    productName: "Women's black vest Gucci",
    imageSource: "/images/womenproduct7.png",
    productCurrentPrice: 230,
    productOriginalPrice: 650,
    isLike: false,
    isNewArrival: true,
    genderId: 1,
    brandId: 3,
    categoryId: 1,
    sizeId: 3,
    colorId: 2,
    productDesc: "Product description 1",
    reviewRate: 4,
    imageCollections: [
      "/images/blackdress1.png",
      "/images/blackdress2.png",
      "/images/blackdress3.png",
      "/images/blackdress4.png",
      "/images/blackdress5.png",
      "/images/blackdress1.png",
    ],
  },
];

export const addProduct = async (): Promise<productType> => {
  console.log("service : ");

  categoryProductList.map(async (productObj, index) => {
    const productRepository = myDataSource.getRepository(Product)
    const product = new Product();
    product.name = productObj.productName
    product.imageMedia = productObj.imageSource
    product.currentPrice = productObj.productCurrentPrice
    product.originalPrice = productObj.productOriginalPrice
    product.genderId = productObj.genderId
    product.brandId = productObj.brandId
    product.categoryId = productObj.categoryId
    product.colorId = productObj.colorId
    product.sizeId = productObj.sizeId
    product.isLike = productObj.isLike
    product.isNewArrival = productObj.isNewArrival
    product.description = productObj.productDesc
    product.reviewRate = productObj.reviewRate
    product.imageCollections = productObj.imageCollections
    const svaeProduct = await productRepository.save(product)
  })
  return;
}

export const getAllProductList = async (): Promise<productType[]> => {
  const productRepository = myDataSource.getRepository(Product)
  const allProduct = await productRepository.find()
  return allProduct;
}
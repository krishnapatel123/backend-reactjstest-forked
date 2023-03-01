import * as productService from "../services/product.service";
import { Request, Response } from "express"
import { Product } from '../entities/product.entity';

export const addProductDetails = async (req: Request, res: Response) => {
  const addProductList: Product = await productService.addProduct(req.body);
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getProductList = async (req: Request, res: Response) => {
  console.log("req obj in getproductlist :", req.query);

  const productList: { filterData: Product[], totalCount?: number, priceRange?: { max: number, min: number } } = await productService.getAllProductList(req.query);
  // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA result response : ", productList);

  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}

export const getFilterProductDetails = async (req: Request, res: Response) => {
  const productList: Product[] = await productService.getFilterProductLists();
  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
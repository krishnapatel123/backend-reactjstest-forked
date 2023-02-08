import * as productService from "../services/product.service";
import { Request, Response } from "express"
import { productType } from '../types/product.type';

export const addProductDetails = async (req: Request, res: Response) => {
  const addProductList: productType = await productService.addProduct();
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getProductList = async (req: Request, res: Response) => {
  const productList: productType[] = await productService.getAllProductList();
  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
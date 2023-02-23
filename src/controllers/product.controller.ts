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
  const productList: Product[] = await productService.getAllProductList();
  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
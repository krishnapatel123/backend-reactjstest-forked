import * as productService from "../services/product.service";
import { Request, Response } from "express"
import { Product } from '../entities/product.entity';
import { CartItems } from '../entities/cartItems.entity';
import { productResType } from "../types/products.type";

export const addProductDetails = async (req: Request, res: Response) => {
  const addProductList: Product = await productService.addProduct(req.body);
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getProductList = async (req: Request, res: Response) => {
  const productList: productResType = await productService.getAllProductList(req.query);
  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}

export const getCartProductList = async (req: Request, res: Response) => {
  const productList: { filterData: CartItems[] } = await productService.getAllCartProductList(req.query);
  try {
    res.status(200).json(productList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
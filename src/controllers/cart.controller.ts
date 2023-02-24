import * as cartServices from "../services/cart.service";
import { Request, Response } from "express"

export const addProductToCartDetails = async (req: Request, res: Response) => {
  const addToCartProductObj = await cartServices.addToCartProduct(req.body);
  try {
    res.status(200).json(addToCartProductObj);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getAddToCartList = async (req: Request, res: Response) => {
  const addToCartProductDetails = await cartServices.getCartDetails(req.params.userId);
  try {
    res.status(200).json(addToCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
import * as cartServices from "../services/cart.service";
import { Request, Response } from "express"
import { cartProductListsType } from "../types/cart.type";

export const addProductToCartDetails = async (req: Request, res: Response) => {

  const addToCartProductObj: cartProductListsType = await cartServices.addToCartProduct(req.body);
  try {
    res.status(200).json(addToCartProductObj);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getAddToCartList = async (req: Request, res: Response) => {
  const addToCartProductDetails: cartProductListsType = await cartServices.getCartDetails(req.params.userId);
  try {
    res.status(200).json(addToCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const updateCartProductDetails = async (req: Request, res: Response) => {
  const updatedCartProductDetails: cartProductListsType = await cartServices.updateCartDetails(req.body);
  try {
    res.status(200).json(updatedCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const deleteCartProductDetails = async (req: Request, res: Response) => {
  const deleteCartProductDetails: cartProductListsType = await cartServices.deleteCartDetails(parseInt(req.params.id));
  try {
    res.status(200).json(deleteCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
import * as cartServices from "../services/cart.service";
import { Request, Response } from "express"

export const addProductToCartDetails = async (req: Request, res: Response) => {
  console.log("addProductToCartDetails ::::: ", req.body);

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

export const updateCartProductDetails = async (req: Request, res: Response) => {
  const updatedCartProductDetails = await cartServices.updateCartDetails(req.body);
  try {
    res.status(200).json(updatedCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const deleteCartProductDetails = async (req: Request, res: Response) => {
  console.log("delte id qury : ", req.params);

  const deleteCartProductDetails = await cartServices.deleteCartDetails(parseInt(req.params.id));
  try {
    res.status(200).json(deleteCartProductDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
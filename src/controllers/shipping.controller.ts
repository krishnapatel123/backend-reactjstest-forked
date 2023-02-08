import * as shippingService from "../services/shipping.service";
import { Request, Response } from "express"
import { shippingType } from '../types/shipping.type';

export const addShippingDetails = async (req: Request, res: Response) => {
  console.log("req.body in shipping controller : ", req.body);

  const addProductList: shippingType = await shippingService.addShipping(req.body);
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getShippingDetails = async (req: Request, res: Response) => {
  const shippingList: shippingType[] = await shippingService.getShipping();
  try {
    res.status(200).json(shippingList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
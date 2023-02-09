import * as shippingService from "../services/shipping.service";
import { Request, Response } from "express"
import { afterAddShippingType, getShippingType } from '../types/shipping.type';

export const addShippingDetails = async (req: Request, res: Response) => {
  const addProductList: afterAddShippingType = await shippingService.addShipping(req.body);
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getShippingDetails = async (req: Request, res: Response) => {
  const shippingList: getShippingType[] = await shippingService.getShipping();
  try {
    res.status(200).json(shippingList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
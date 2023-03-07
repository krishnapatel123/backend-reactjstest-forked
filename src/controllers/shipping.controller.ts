import * as shippingService from "../services/shipping.service";
import { Request, Response } from "express"
import { Shipping } from '../entities/shipping.entity';

export const addShippingDetails = async (req: Request, res: Response) => {
  const addProductList: Shipping = await shippingService.addShipping(req.body);
  try {
    res.status(200).json(addProductList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getShippingDetails = async (req: Request, res: Response) => {
  const shippingList: { shippingId: number } = await shippingService.getShipping(req.body.userId);
  try {
    res.status(200).json(shippingList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
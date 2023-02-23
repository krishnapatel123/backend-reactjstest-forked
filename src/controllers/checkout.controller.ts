import * as checkoutServices from "../services/checkout.service";
import { Request, Response } from "express"
import { Checkout } from '../entities/checkout.entity';

export const addCheckoutDetails = async (req: Request, res: Response) => {
  const addcheckout: Checkout = await checkoutServices.addCheckout(req.body);
  try {
    res.status(200).json(addcheckout);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getCheckoutDetails = async (req: Request, res: Response) => {
  const checkoutDetails: Checkout[] = await checkoutServices.getCheckout();
  try {
    res.status(200).json(checkoutDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
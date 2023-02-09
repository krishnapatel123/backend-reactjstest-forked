import * as checkoutServices from "../services/checkout.service";
import { Request, Response } from "express"
import { checkoutType, getCheckoutType } from '../types/checkout.type';

export const addCheckoutDetails = async (req: Request, res: Response) => {
  const addcheckout: checkoutType = await checkoutServices.addCheckout(req.body);
  try {
    res.status(200).json(addcheckout);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

export const getCheckoutDetails = async (req: Request, res: Response) => {
  const checkoutDetails: getCheckoutType[] = await checkoutServices.getCheckout();
  try {
    res.status(200).json(checkoutDetails);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
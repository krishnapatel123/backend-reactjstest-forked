import * as orderDetailServices from "../services/orderDetail.service";
import { Request, Response } from "express"

export const addOrderDetails = async (req: Request, res: Response) => {
  const addOrderDetailObj: string = await orderDetailServices.addOrderDetails(req.body);
  try {
    res.status(200).json(addOrderDetailObj);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
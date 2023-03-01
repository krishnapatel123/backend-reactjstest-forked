import * as orderDetailServices from "../services/orderDetail.service";
import { Request, Response } from "express"
// import { getOrderDetailType } from '../types/orderDetail.type';

export const addOrderDetails = async (req: Request, res: Response) => {
  const addOrderDetailObj = await orderDetailServices.addOrderDetails(req.body);
  try {
    res.status(200).json(addOrderDetailObj);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// export const getOrderDetailsList = async (req: Request, res: Response) => {
//   const orderDetailsList = await orderDetailServices.getOrderDetails(req.params.userId);
//   try {
//     res.status(200).json(orderDetailsList);
//   } catch (e) {
//     res.status(400).json(e.message);
//   }
// };
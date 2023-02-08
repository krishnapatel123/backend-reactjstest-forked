import * as sizeService from "../services/size.service";
import { Request, Response } from "express"
import { sizeType } from '../types/size.type';

export const getSizeList = async (req: Request, res: Response) => {
  const sizeList: sizeType[] = await sizeService.getAllSizeList();
  try {
    res.status(200).json(sizeList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
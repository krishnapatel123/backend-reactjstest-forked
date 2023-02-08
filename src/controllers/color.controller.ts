import * as colorService from "../services/color.service";
import { Request, Response } from "express"
import { colorType } from '../types/color.type';

export const getColorList = async (req: Request, res: Response) => {
  const colorList: colorType[] = await colorService.getAllColorList();
  try {
    res.status(200).json(colorList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
import * as brandService from "../services/brand.service";
import { Request, Response } from "express"
import { brandType } from '../types/brand.type';

export const getBrandList = async (req: Request, res: Response) => {
  const brandList: brandType[] = await brandService.getAllBrandList();
  try {
    res.status(200).json(brandList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
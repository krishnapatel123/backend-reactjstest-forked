import * as productBelongsToService from "../services/productBelongsTo.service";
import { Request, Response } from "express"
import { Product } from '../entities/product.entity';
import { ProductBelongsTo } from "../entities/productBelongsTo.entity";

export const getProductBelongsToList = async (req: Request, res: Response) => {
  const productBelongsToList: ProductBelongsTo[] = await productBelongsToService.getAllProductBelongsToList();
  try {
    res.status(200).json(productBelongsToList);
  } catch (e) {
    res.status(400).json(e.message);
  }
}
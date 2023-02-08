import * as genderService from "../services/gender.service";
import { genderType } from '../types/gender.type';
import { Request, Response } from "express"

export const getGenderList = async (req: Request, res: Response) => {
  const genderList: genderType[] = await genderService.getAllGenderList();
  try {
    res.status(200).json(genderList);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
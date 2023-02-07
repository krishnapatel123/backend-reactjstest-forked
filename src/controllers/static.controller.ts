import * as staticService from "../services/static.service";
import { genderType } from '../types/gender.type';
import { brandType } from '../types/brand.type';
import e = require("express");

export const getGenderList = async (req: any, res: any) => {
  const genderList: genderType[] = await staticService.getAllGenderList();
  try {
    return genderList;
    // res.status(200).send(genderList);
  } catch (e) {
    return e.message;
    // res.status(402).send(e.message);
  }
};

export const getBrandList = async (req: any, res: any) => {
  const brandList: brandType[] = await staticService.getAllBrandList();
  try {
    return brandList;
  } catch (e) {
    return e.message;
    // res.status(402).send(e.message);
  }
};

export const getCategoryList = async (req: any, res: any) => {
  const categoryList: genderType[] = await staticService.getAllCategoryList();
  try {
    return categoryList;
    // res.status(200).send(categoryList);
  } catch (e) {
    return e.message
    // res.status(402).send(e.message);
  }
};

export const getSizeList = async (req: any, res: any) => {
  const sizeList: genderType[] = await staticService.getAllSizeList();
  try {
    return sizeList;
    // res.status(200).send(sizeList);
  } catch (e) {
    return e.message;
    // res.status(402).send(e.message);
  }
};
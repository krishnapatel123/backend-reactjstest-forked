import { genderType } from "../types/gender.type";
import { myDataSource } from '../data-source';
import { Gender } from '../entities/gender.entity';
import { brandType } from '../types/brand.type';
import { Brand } from "../entities/brand.entity";
import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { sizeType } from '../types/size.type';
import { Size } from "../entities/size.entity";

export const getAllGenderList = async (): Promise<genderType[]> => {
  const genderRepository = myDataSource.getRepository(Gender)
  const allGender = await genderRepository.find()
  console.log("gender service : ", allGender);
  return allGender;
}

export const getAllBrandList = async (): Promise<brandType[]> => {
  const brandRepository = myDataSource.getRepository(Brand)
  const allBrand = await brandRepository.find()
  console.log("brand service : ", allBrand);
  return allBrand;
}
export const getAllCategoryList = async (): Promise<categoryType[]> => {
  const categoryRepository = myDataSource.getRepository(Category)
  const allCategory = await categoryRepository.find()
  console.log("category service : ", allCategory);
  return allCategory;
}
export const getAllSizeList = async (): Promise<sizeType[]> => {
  const SizeRepository = myDataSource.getRepository(Size)
  const allSize = await SizeRepository.find()
  console.log("size service : ", allSize);
  return allSize;
}
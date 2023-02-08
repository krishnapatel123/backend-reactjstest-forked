import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';

export const getAllCategoryList = async (): Promise<categoryType[]> => {
  const categoryRepository = myDataSource.getRepository(Category)
  const allCategory = await categoryRepository.find()
  return allCategory;
}
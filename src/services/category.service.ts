import { categoryType } from '../types/category.type';
import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';
import { categoryLists } from '../data/categoryLists';

export const getAllCategoryList = async (): Promise<categoryType[]> => {
  const categoryRepository = myDataSource.getRepository(Category)

  // static object insert data into table on get api call
  // categoryLists.map(async (b) => {
  //   const brand = new Category();
  //   brand.name = b.name;
  //   brand.slug = b.slug;
  //   await categoryRepository.save(brand);
  // })

  return categoryRepository.find()
}
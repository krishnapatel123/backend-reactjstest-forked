import { Category } from '../entities/category.entity';
import { myDataSource } from '../data-source';

export const getAllCategoryList = async () => {
  try {
    const categoryRepository = myDataSource.getRepository(Category)

    // static object insert data into table on get api call
    // categoryLists.map(async (b) => {
    //   const brand = new Category();
    //   brand.name = b.name;
    //   brand.slug = b.slug;
    //   await categoryRepository.save(brand);
    // })

    return categoryRepository.find()
  } catch (error) {
    return error.message
  }
}
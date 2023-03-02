import { myDataSource } from '../data-source';
import { Gender } from '../entities/gender.entity';

export const getAllGenderList = async () => {
  try {
    const genderRepository = myDataSource.getRepository(Gender)

    // static object insert data into table on get api call
    // genderLists.map(async (b) => {
    //   const brand = new Gender();
    //   brand.name = b.name;
    //   brand.slug = b.slug;
    //   await genderRepository.save(brand);
    // })

    return genderRepository.find()
  } catch (error) {
    return error.message
  }
}



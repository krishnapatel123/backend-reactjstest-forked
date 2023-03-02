import { Brand } from '../entities/brand.entity';
import { myDataSource } from '../data-source';

export const getAllBrandList = async () => {
  try {
    const brandRepository = myDataSource.getRepository(Brand)
    //static object insert data into table on get api call
    // brandLists.map(async (b) => {
    //   const brand = new Brand();
    //   brand.name = b.name;
    //   brand.slug = b.slug;
    //   await brandRepository.save(brand);
    // })

    //insert user
    // const brandRepository = myDataSource.getRepository(UserData)
    // const u = new UserData();
    // u.userName = 'krishnaPatel9104';
    // u.password = 'krishil9104';
    // await brandRepository.save(u);
    // return;

    return brandRepository.find()
  } catch (error) {
    return error.message
  }
}
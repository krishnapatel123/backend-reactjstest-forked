import { brandType } from '../types/brand.type';
import { Brand } from '../entities/brand.entity';
import { myDataSource } from '../data-source';
import { brandLists } from '../data/brandLists';
import { UserData } from '../entities/user.entity';

export const getAllBrandList = async (): Promise<brandType[]> => {
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
}
import { sizeType } from '../types/size.type';
import { Size } from '../entities/size.entity';
import { myDataSource } from '../data-source';
import { sizeLists } from '../data/sizeLists';

export const getAllSizeList = async (): Promise<sizeType[]> => {
  const SizeRepository = myDataSource.getRepository(Size)

  // static object insert data into table on get api call
  // sizeLists.map(async (b) => {
  //   const brand = new Size();
  //   brand.name = b.name;
  //   brand.value = b.value;
  //   await SizeRepository.save(brand);
  // })

  return SizeRepository.find()
}
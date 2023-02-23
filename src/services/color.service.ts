import { myDataSource } from '../data-source';
import { colorType } from '../types/color.type';
import { Color } from '../entities/color.entity';
import { colorLists } from '../data/colorLists';

export const getAllColorList = async (): Promise<colorType[]> => {
  const colorRepository = myDataSource.getRepository(Color)

  // static object insert data into table on get api call
  // colorLists.map(async (b) => {
  //   const brand = new Color();
  //   brand.name = b.name;
  //   brand.haxValue = b.haxValue;
  //   await colorRepository.save(brand);
  // })

  return colorRepository.find()
}



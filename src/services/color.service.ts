import { myDataSource } from '../data-source';
import { Color } from '../entities/color.entity';

export const getAllColorList = async () => {
  try {
    const colorRepository = myDataSource.getRepository(Color)

    // static object insert data into table on get api call
    // colorLists.map(async (b) => {
    //   const brand = new Color();
    //   brand.name = b.name;
    //   brand.haxValue = b.haxValue;
    //   await colorRepository.save(brand);
    // })

    return colorRepository.find()
  } catch (error) {
    return error.message
  }
}



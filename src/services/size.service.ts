import { Size } from '../entities/size.entity';
import { myDataSource } from '../data-source';

export const getAllSizeList = async () => {
  try {
    const SizeRepository = myDataSource.getRepository(Size)

    // static object insert data into table on get api call
    // sizeLists.map(async (b) => {
    //   const brand = new Size();
    //   brand.name = b.name;
    //   brand.value = b.value;
    //   await SizeRepository.save(brand);
    // })

    return SizeRepository.find()
  } catch (error) {
    return error.message
  }
}
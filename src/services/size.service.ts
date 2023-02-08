import { sizeType } from '../types/size.type';
import { Size } from '../entities/size.entity';
import { myDataSource } from '../data-source';

export const getAllSizeList = async (): Promise<sizeType[]> => {
  const SizeRepository = myDataSource.getRepository(Size)
  const allSize = await SizeRepository.find()
  return allSize;
}
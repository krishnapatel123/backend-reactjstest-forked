import { myDataSource } from '../data-source';
import { colorType } from '../types/color.type';
import { Color } from '../entities/color.entity';

export const getAllColorList = async (): Promise<colorType[]> => {
  const colorRepository = myDataSource.getRepository(Color)
  const allColor = await colorRepository.find()
  return allColor;
}



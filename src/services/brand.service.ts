import { brandType } from '../types/brand.type';
import { Brand } from '../entities/brand.entity';
import { myDataSource } from '../data-source';

export const getAllBrandList = async (): Promise<brandType[]> => {
  const brandRepository = myDataSource.getRepository(Brand)
  const allBrand = await brandRepository.find()
  return allBrand;
}
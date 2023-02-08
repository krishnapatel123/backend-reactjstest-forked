import { genderType } from "../types/gender.type";
import { myDataSource } from '../data-source';
import { Gender } from '../entities/gender.entity';

export const getAllGenderList = async (): Promise<genderType[]> => {
  const genderRepository = myDataSource.getRepository(Gender)
  const allGender = await genderRepository.find()
  return allGender;
}



import { myDataSource } from '../data-source';
import { UserData } from '../entities/user.entity';
import { userType } from '../types/login';
import * as jwt from 'jsonwebtoken';

export const userLogin = async (userCredentials: userType) => {
  try {
    const jwtKey = "ecommerce"//process.env.JWT_SECRET_KEY;
    const userInfo = await myDataSource.getRepository(UserData).findOne({ where: { username: userCredentials.userName, password: userCredentials.password } });
    if (userInfo) {
      let token = await jwt.sign({ userInfo }, jwtKey, {
        expiresIn: '2 days'
      });
      if (token) {
        return { userInfo, auth: token }
      }
    } else {
      return 'Provide correct user credentials'
    }
  }
  catch (error) {
    return error.message
  }
}
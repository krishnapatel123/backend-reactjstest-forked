import { myDataSource } from '../data-source';
import { UserData } from '../entities/user.entity';
import { userType } from '../types/login';
import * as jwt from 'jsonwebtoken';

export const userLogin = async (userCredentials: userType) => {
  console.log("userCredentials : ", userCredentials);
  
  try {
    const jwtKey = "ecommerce"//process.env.JWT_SECRET_KEY;
    // console.log("jwtkey : ", jwtKey);

    const userInfo = await myDataSource.getRepository(UserData).findOne({ where: { username: userCredentials.userName, password: userCredentials.password } });
    console.log("userInfo : ", userInfo);
    if (userInfo) {
      let token = jwt.sign({ userInfo }, jwtKey, {
        expiresIn: '2 days'
      })
      console.log("token after set login ::::::: ", token);
      return {
        userInfo, auth: token
      }
    }
  }
  catch (error) {
    return error.message
  }
}
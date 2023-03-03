import * as loginService from "../services/login.service";
import { Request, Response } from "express"
import { userType } from '../types/login';

export const login = async (req: Request, res: Response) => {
  console.log('req.body type :: :: ::', req.body);
  
  const userInfo: userType = await loginService.userLogin(req.body);
  try {
    res.status(200).json(userInfo);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
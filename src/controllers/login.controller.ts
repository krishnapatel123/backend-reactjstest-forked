import * as loginService from "../services/login.service";
import { Request, Response } from "express"
import { userResType } from '../types/login';

export const login = async (req: Request, res: Response) => {
  const userInfo: userResType = await loginService.userLogin(req.body);
  try {
    res.status(200).json(userInfo);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
import * as loginService from "../services/login.service";
import { Request, Response } from "express"
import { userResType } from '../types/login';

export const login = async (req: Request, res: Response) => {
  const userDetails: userResType = await loginService.userLogin(req.body);
  try {
    if (userDetails?.errorStatus === 401) {
      res.status(401).json(userDetails);
    } else {
      res.status(200).json(userDetails);
    }
  } catch (e) {
    res.status(400).json(e.message);
  }
};
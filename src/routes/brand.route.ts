import { getBrandList } from '../controllers/brand.controller';
import { verifyToken } from '../utils/jwt';

const express = require("express");
const router = express.Router();

router.get('/', verifyToken, getBrandList)
export default router;
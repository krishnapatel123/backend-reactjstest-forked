import { getBrandList } from '../controllers/brand.controller';
const express = require("express");
const router = express.Router();

router.get('/', getBrandList)
export default router;
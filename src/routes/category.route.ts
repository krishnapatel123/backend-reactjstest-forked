import { getCategoryList } from '../controllers/category.controller';
const express = require("express");
const router = express.Router();

router.get('/', getCategoryList)
export default router;
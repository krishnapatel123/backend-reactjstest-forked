import { getGenderList } from '../controllers/gender.controller';
const express = require("express");
const router = express.Router();

router.get('/', getGenderList)
export default router;
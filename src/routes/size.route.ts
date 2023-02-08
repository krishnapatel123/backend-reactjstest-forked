import { getSizeList } from '../controllers/size.controller';
const express = require("express");
const router = express.Router();

router.get('/', getSizeList)
export default router;
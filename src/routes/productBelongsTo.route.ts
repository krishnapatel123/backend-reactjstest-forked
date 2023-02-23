import { getProductBelongsToList } from '../controllers/productBelongsTo.controller';
const express = require("express");
const router = express.Router();

router.get('/', getProductBelongsToList)

export default router;
import { addProductDetails, getProductList } from '../controllers/product.controller';
const express = require("express");
const router = express.Router();

router.get('/add', addProductDetails)
router.get('/', getProductList)

export default router;
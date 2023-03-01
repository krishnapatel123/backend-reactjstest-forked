import { addProductDetails, getFilterProductDetails, getProductList } from '../controllers/product.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addProductDetails)
router.get('/', getProductList)
router.get('/:filters', getFilterProductDetails)


export default router;
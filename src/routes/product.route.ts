import { addProductDetails, getCartProductList, getProductList } from '../controllers/product.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addProductDetails)
// router.put('/', addProductDetails)
router.get('/', getProductList)
router.get('/cart', getCartProductList)


export default router;
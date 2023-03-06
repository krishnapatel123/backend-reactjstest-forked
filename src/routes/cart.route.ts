import { addProductToCartDetails, getAddToCartList, updateCartProductDetails, deleteCartProductDetails } from '../controllers/cart.controller';
import { verifyToken } from '../utils/jwt';
const express = require("express");
const router = express.Router();

router.get('/', verifyToken, getAddToCartList)
router.post('/add', verifyToken, addProductToCartDetails)
router.put('/', verifyToken, updateCartProductDetails)
router.delete('/:id', verifyToken, deleteCartProductDetails)

export default router;
import { addProductToCartDetails, getAddToCartList, updateCartProductDetails, deleteCartProductDetails } from '../controllers/cart.controller';
const express = require("express");
const router = express.Router();

router.get('/:userId', getAddToCartList)
router.post('/add', addProductToCartDetails)
router.put('/', updateCartProductDetails)
router.delete('/:id', deleteCartProductDetails)

export default router;
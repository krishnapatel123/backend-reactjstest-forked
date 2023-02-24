import { addProductToCartDetails, getAddToCartList } from '../controllers/cart.controller';
const express = require("express");
const router = express.Router();

router.get('/:userId', getAddToCartList)
router.post('/add', addProductToCartDetails)
export default router;
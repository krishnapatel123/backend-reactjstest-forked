import { addProductDetails, getCartProductList, getProductList } from '../controllers/product.controller';
import { MulterUpload } from '../utils/multerImageUpload';
const express = require("express");
const router = express.Router();

router.post('/add', MulterUpload.array('productImages', 5), addProductDetails)
router.get('/', getProductList)
router.get('/cart', getCartProductList)


export default router;
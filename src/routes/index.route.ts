import genderRoute from './gender.route';
import brandRoute from './brand.route';
import categoryRoute from './category.route';
import sizeRoute from './size.route';
import productRoute from './product.route';
import colorRoute from './color.route';
import shippingRoute from './shipping.route';
import checkoutRoute from './checkout.route';
import orderDetailRoute from './orderDetail.route';
import cartRoute from './cart.route';
import loginRoute from './login.route';

import * as express from 'express';

const router = express.Router();

router.use('/gender', genderRoute)
router.use('/brand', brandRoute)
router.use('/category', categoryRoute)
router.use('/size', sizeRoute)
router.use('/color', colorRoute)
router.use('/product', productRoute)
router.use('/shipping', shippingRoute)
router.use('/checkout', checkoutRoute)
router.use('/orderDetail', orderDetailRoute)
router.use('/cart', cartRoute)
router.use('/login', loginRoute)

export default router;
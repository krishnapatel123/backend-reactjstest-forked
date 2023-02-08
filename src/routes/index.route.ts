import genderRoute from './gender.route';
import brandRoute from './brand.route';
import categoryRoute from './category.route';
import sizeRoute from './size.route';
import productRoute from './product.route';
import colorRoute from './color.route';
import * as express from 'express';

const router = express.Router();

router.use('/gender', genderRoute)
router.use('/brand', brandRoute)
router.use('/category', categoryRoute)
router.use('/size', sizeRoute)
router.use('/color', colorRoute)
router.use('/product', productRoute)

export default router;
import { addShippingDetails, getShippingDetails } from '../controllers/shipping.controller';
import { verifyToken } from '../utils/jwt';
const express = require("express");
const router = express.Router();

router.post('/add', verifyToken, addShippingDetails)
router.get('/:id', verifyToken, getShippingDetails)

export default router;
import { addCheckoutDetails, getCheckoutDetails } from '../controllers/checkout.controller';
import { verifyToken } from '../utils/jwt';
const express = require("express");
const router = express.Router();

router.post('/add', verifyToken, addCheckoutDetails)
router.get('/:id', verifyToken, getCheckoutDetails)

export default router;
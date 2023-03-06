import { addOrderDetails } from '../controllers/orderDetail.controller';
import { verifyToken } from '../utils/jwt';
const express = require("express");
const router = express.Router();

router.post('/add', verifyToken, addOrderDetails)

export default router;
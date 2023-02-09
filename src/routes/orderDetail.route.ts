import { addOrderDetails, getOrderDetailsList } from '../controllers/orderDetail.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addOrderDetails)
router.get('/', getOrderDetailsList)

export default router;
import { addOrderDetails } from '../controllers/orderDetail.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addOrderDetails)

export default router;
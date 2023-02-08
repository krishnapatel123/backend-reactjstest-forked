import { addShippingDetails, getShippingDetails } from '../controllers/shipping.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addShippingDetails)
router.get('/', getShippingDetails)

export default router;
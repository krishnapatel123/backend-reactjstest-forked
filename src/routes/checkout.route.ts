import { addCheckoutDetails, getCheckoutDetails } from '../controllers/checkout.controller';
const express = require("express");
const router = express.Router();

router.post('/add', addCheckoutDetails)
router.get('/', getCheckoutDetails)

export default router;
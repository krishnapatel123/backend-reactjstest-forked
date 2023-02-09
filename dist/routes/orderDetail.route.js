"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderDetail_controller_1 = require("../controllers/orderDetail.controller");
var express = require("express");
var router = express.Router();
router.post('/add', orderDetail_controller_1.addOrderDetails);
router.get('/', orderDetail_controller_1.getOrderDetailsList);
exports.default = router;

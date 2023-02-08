"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shipping_controller_1 = require("../controllers/shipping.controller");
var express = require("express");
var router = express.Router();
router.post('/add', shipping_controller_1.addShippingDetails);
router.get('/', shipping_controller_1.getShippingDetails);
exports.default = router;

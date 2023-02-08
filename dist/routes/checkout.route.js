"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkout_controller_1 = require("../controllers/checkout.controller");
var express = require("express");
var router = express.Router();
router.post('/add', checkout_controller_1.addCheckoutDetails);
router.get('/', checkout_controller_1.getCheckoutDetails);
exports.default = router;

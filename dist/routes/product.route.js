"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_controller_1 = require("../controllers/product.controller");
var express = require("express");
var router = express.Router();
// router.get('/add', addProductDetails)
router.get('/', product_controller_1.getProductList);
exports.default = router;

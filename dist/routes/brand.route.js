"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brand_controller_1 = require("../controllers/brand.controller");
var express = require("express");
var router = express.Router();
router.get('/', brand_controller_1.getBrandList);
exports.default = router;

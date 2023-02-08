"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_controller_1 = require("../controllers/category.controller");
var express = require("express");
var router = express.Router();
router.get('/', category_controller_1.getCategoryList);
exports.default = router;

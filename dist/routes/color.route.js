"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_controller_1 = require("../controllers/color.controller");
var express = require("express");
var router = express.Router();
router.get('/', color_controller_1.getColorList);
exports.default = router;

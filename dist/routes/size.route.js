"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var size_controller_1 = require("../controllers/size.controller");
var express = require("express");
var router = express.Router();
router.get('/', size_controller_1.getSizeList);
exports.default = router;

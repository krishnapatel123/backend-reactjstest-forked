"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gender_controller_1 = require("../controllers/gender.controller");
var express = require("express");
var router = express.Router();
router.get('/', gender_controller_1.getGenderList);
exports.default = router;

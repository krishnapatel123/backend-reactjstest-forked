"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var static_controller_1 = require("../controllers/static.controller");
var express = require("express");
var router = express.Router();
// const staticController = require("../controllers/static.controller");
// router.get('/gender', (req, res) => staticController.getGenderList)
router.get('/gender', static_controller_1.getGenderList);
// router.get('/category', (req, res) => staticController.getCategoryList)
// router.get('/size', (req, res) => staticController.getSizeList)
// router.get('/gender', (req, res) => staticController.getGenderList)
// router.get('/brand', (req, res) => { staticController.getBrandList() })
// router.get('/category', (req, res) => { staticController.getCategoryList() })
// router.get('/size', (req, res) => { staticController.getSizeList() })
exports.default = router;

var express = require("express");
var router = express.Router();
var staticController = require("../controllers/static.controller");
router.get('/gender', function (req, res) { staticController.getGenderList(); });
router.get('/brand', function (req, res) { staticController.getBrandList(); });
router.get('/category', function (req, res) { staticController.getCategoryList(); });
router.get('/size', function (req, res) { staticController.getSizeList(); });
module.exports = router;

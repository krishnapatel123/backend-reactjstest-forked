const express = require("express");
const router = express.Router();

const staticController = require("../controllers/static.controller");

router.get('/gender', (req, res) => { staticController.getGenderList() })
router.get('/brand', (req, res) => { staticController.getBrandList() })
router.get('/category', (req, res) => { staticController.getCategoryList() })
router.get('/size', (req, res) => { staticController.getSizeList() })

module.exports = router;
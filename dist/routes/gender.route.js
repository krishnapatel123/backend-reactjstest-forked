var express = require("express");
var router = express.Router();
var genderContoller = require("../controllers/gender.controller");
router.get('/gender', function (req, res) { genderContoller.getGenderList(); });
module.exports = router;

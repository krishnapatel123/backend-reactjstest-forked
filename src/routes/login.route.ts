import { login } from '../controllers/login.controller';
const express = require("express");
const router = express.Router();

router.post('/', login)
export default router;
const express = require("express");
const router = express.Router();
const query=require('../db/query')
const userController = require('../controllers/userController')

router.get("/", (req,res,next)=>res.render("form"));

router.post("/", userController.newMessagePost);
module.exports = router;

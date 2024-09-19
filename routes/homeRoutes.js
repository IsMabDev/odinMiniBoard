const express = require('express')
const router = express.Router()

const userController=require('../controllers/userController')
router.get("/", userController.messagesGet)

router.post("/:id", userController.messageDetailsPost);

module.exports={router}
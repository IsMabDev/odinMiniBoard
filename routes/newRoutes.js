const express = require("express");
const router = express.Router();
const messages=require("../db/messages")


router.get("/", (req,res,next)=>res.render("form"));

router.post("/", (req, res) => {
  const messageTexte = req.body.message;
  const messageUser = req.body.name;
  messages.push({ text: messageTexte, user:messageUser, added:new Date() })
  res.redirect("/")
})
module.exports = router;

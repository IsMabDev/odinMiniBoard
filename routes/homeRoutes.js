const express = require('express')
const router = express.Router()
router.get("/", (req, res, next) => res.render("index", { Title: "Title from home Routes", messages: messages }))

router.post("/:id", (req, res, next) => {
  const message = messages[req.params.id];
  console.log('message: ', message.user);

  res.render("messageDetails", { message:message.user})
})

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];


module.exports={router,messages}
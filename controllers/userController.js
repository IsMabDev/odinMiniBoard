const messages=require("../db/messages")
console.log('messages: ', messages);

exports.messagesGet = (req, res, next) => res.render("index", { Title: "Title from home Routes", messages: messages })

exports.messageDetailsPost= (req, res, next) => {
  const message = messages[req.params.id];
  console.log('message: ', message.user);

  res.render("messageDetails", { message:message.user})
}
const query = require('../db/query');

let messages = [];
  (async function () {
    await query.createMiniBoardTable();
    console.log("invoked function");
    messages = await query.GetAllMessagesFromTable();

  })()


exports.messagesGet = async (req, res, next) => {
      messages = await query.GetAllMessagesFromTable();

console.log('messages from message get:=>=>=> ', messages);

  res.render("index", { Title: "Title from home Routes", messages: messages })
}

exports.messageDetailsPost= (req, res, next) => {
  const message = messages[req.params.id];
  console.log('message: ', message.user);

  res.render("messageDetails", { message:message.user})
}

exports.newMessagePost= async (req, res) => {
  const messageTexte = req.body.message;
  const messageUser = req.body.name;
  await query.insertNewMessage(messageUser,messageTexte,new Date())
  res.redirect("/")
}
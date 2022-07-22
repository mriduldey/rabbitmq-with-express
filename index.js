const express = require("express");
const sendMessage = require("./services/MQService");

const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from("<p>RabbitMQ Practice with Node</p>"));
});

app.post("/", (req, res) => {
  try {
    const { message, queue } = req.body;
    sendMessage(message, queue);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3000, () => console.log("server running on 3000"));

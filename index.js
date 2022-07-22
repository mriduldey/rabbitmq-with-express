const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.json({ appName: "Workinging with RabbitMQ" });
  res.send(Buffer.from("<p>some html</p>"));
});

app.listen(3000, () => console.log("server running on 3000"));

const express = require('express');
const { sendMessage, getMessage } = require('./services/MQService');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('<p>RabbitMQ Practice with Node</p>');
});

app.post('/', (req, res) => {
  try {
    const { message, queue } = req.body;
    sendMessage(queue, message);
    res.status(200).send('Message Sending Successful');
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/msg', (req, res) => {
  try {
    const queue = 'user-messages';
    getMessage(queue, (msg) => {
      console.log('messageeeee::::', msg);
      res.set('Content-Type', 'application/json');
      res.send(msg);
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3000, () => console.log('server running on 3000'));

const amqp = require('amqplib');

const AMQP_CONN_URL = `amqps://${process.env.amqpUser}:${process.env.amqpPass}@puffin.rmq2.cloudamqp.com/${process.env.amqpUser}`;

const amqpConn = amqp.connect(AMQP_CONN_URL);

function sendMessage(q, msg) {
  amqpConn
    .then(async (conn) => {
      const channel = await conn.createChannel();
      await channel.assertQueue(q);
      channel.sendToQueue(q, Buffer.from(JSON.stringify(msg)));
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  sendMessage,
};

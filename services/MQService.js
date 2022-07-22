import amqp from "amqplib";

const AMQP_CONN_URL = `amqps://${process.env.amqpUser}:${process.env.amqpPass}@puffin.rmq2.cloudamqp.com/${process.env.amqpUser}`;

const amqpConn = amqp.connect(AMQP_CONN_URL);

export function sendMessage(q, msg) {
  amqpConn.then(async (conn) => {
    const channel = await conn.createChannel();
    await channel.assertQueue(q);
    channel.sendToQueue(q, Buffer.from(msg));
  });
}

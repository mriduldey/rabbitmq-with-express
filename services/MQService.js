import amqp from "amqplib/callback-api";

const AMQP_CONN_URL = `amqps://${process.env.amqpUser}:${process.env.amqpPass}@puffin.rmq2.cloudamqp.com/${process.env.amqpUser}`;

amqp.connect(AMQP_CONN_URL, (connectError, connection) => {
  if (connectError) {
    console.error(connectError);
  }

  connection.createChannel((channelErr, channel) => {
    if (channelErr) {
      console.error(channelErr);
    }
  });
});

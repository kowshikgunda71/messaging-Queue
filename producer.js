const amqp = require("amqplib/callback_api");//amqp lib is a specail type of dependency to conn rabbit queue 
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    throw connError;
  }
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    const QUE = "test";//give a queue name for producing message 
    channel.assertQueue(QUE);
    channel.sendToQueue(QUE, Buffer.from("hello"));//send the message to queue
    console.log("sent");
  });
});

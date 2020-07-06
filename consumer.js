const amqp = require("amqplib/callback_api");
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    throw connError;
  }
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    
    const QUE = "test";//give same or queue you are using for producer 
    channel.assertQueue(QUE);
    channel.consume(//use consume to read the message 
      QUE,
      (msg) => {
        console.log(`Message Recived ${msg.content.toString()}`);
      },
      { noAck: true }// noACK to true for totally consuming the message and done with message 
    );
  });
});

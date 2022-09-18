// producer.js
var zmq = require("zeromq"),
  sock = zmq.socket("push");

sock.bindSync("tcp://127.0.0.1:5690");
console.log("Producer bound to port 3000");

//setInterval(function() {
  console.log("sending work");
  sock.send("some work");
//}, 500);


sock1 = zmq.socket("pull");
sock1.bindSync("tcp://127.0.0.1:5600");
sock1.on("message", function(msg) {
  console.log("work: %s", msg.toString());
});

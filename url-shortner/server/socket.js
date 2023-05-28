const socketIO = require("socket.io");

let io;
let id;

function initialize(server) {
  io = socketIO(server,{cors:{origin:'*'}});

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
id=socket.id
socket.join(`${id}`);
    // Add your socket.io event listeners or logic here
  });
}

function getIO() {
  return io;
}
function getId() {
    return id;
  }

module.exports = { initialize, getIO, getId };

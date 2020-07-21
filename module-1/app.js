const http = require("http");
const routes = require("./routes");
const requestHandler = require("./routes");

function reqListner(req, res) {
  requestHandler(req, res);

  // process.exit(); // Will exit the process
}

const server = http.createServer(reqListner);

server.listen(3000);

//http module
var http = require("http");


function onRequest(request, response) {
  console.log("Request received");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

//creaate function listen to port with http module "http"
http.createServer(onRequest).listen(8888);

console.log("server has started");

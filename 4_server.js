var http = require("http");
var url = require("url");


//create module named start""
function start(route, handle) {
  function onRequest(request, response) {
    
    var pathname = url.parse(request.url).pathname;

    //除去favicon.ico
    if(pathname != "/favicon.ico"){

        console.log("Request received from " + pathname + ".");

        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        console.log(" ");
    }
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

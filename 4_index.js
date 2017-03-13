//use mudule create in 4_server.js
var server = require("./4_server");
var router = require("./4_router");
var requestHandlers = require("./4_requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);

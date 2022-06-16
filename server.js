var express = require("express");
var app = express();
var http = require("http").createServer(app);

http.listen(3000, function () {
  console.log("Server started running at port: 3000");
});

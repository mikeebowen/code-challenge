// This is the simple server with only node.js
// require httl module
var http = require("http");
//require fs module
var fs = require("fs");
// get index file with fs and assign it to index variable
var index = fs.readFileSync("index.html");
//run create server method from http and assign it to server variable
var server = http.createServer(function (req, res) {
  //tell server everything is ok
  res.writeHead(200);
  //write index variable
  res.write(index);
  // end response
  res.end();
});
// listen to port 300
server.listen(3000);
// on error console.error the error
server.on("error", function (e) {
    console.error("There is an error in your file: " + e);
});

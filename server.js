var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("./app/index.html");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(index);
    res.end();
});

server.listen(3000);

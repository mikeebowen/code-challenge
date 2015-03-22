var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("index.html");

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write(index);
    res.end();
});

server.listen(3000);

server.on("error", function (e) {
    console.eror("Error: " + e);
});

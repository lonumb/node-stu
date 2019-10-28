
const http = require('http');

const server = new http.Server();

server.on("request",function(req,res){
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("success");
});


server.listen(8080);
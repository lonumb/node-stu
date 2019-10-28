
const http = require('http');

const server = new http.Server();
server.listen(8890);
server.on("request",(req,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.end("hi lo");
    console.log(req.version);
});

console.log("servered is complate!");

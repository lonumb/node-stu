#!/usr/bin/env node

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const fn = require("./fn");
const mime = require("./mimeType.json");

const params = fn.readParams(process.argv.splice(2));

const config = {
     port:  params.port || 8891,
     index: params.index || 'index.html'
}

const server = new http.Server();
server.on("request",onRequest);
server.listen(config.port);

function onRequest(req,res){

    req.setEncoding('utf8');

    req.on('data',()=>{});

    req.addListener('end',()=>{

        let myUrl = url.parse(req.url,true);
        let filename = myUrl.pathname.replace(/^\//,'') || config.index;
        let filepath = path.resolve(process.cwd(),filename);
        let ext = filepath.substring(filepath.lastIndexOf('.')+1);

        if(fs.existsSync(filepath)){
            if(fs.statSync(filepath).isDirectory()){
                filepath = path.join(filepath,filename);
            }
            let buffer = fs.readFileSync(filepath);
            res.writeHead(200,{"Content-Type": mime[ext] || 'text/plain'});
            res.write(buffer);
            res.end();
        }else{
            res.writeHead(404,{"Content-Type":'text/plain'});
            res.write("404 Not Found.");
            res.end();
        }
    });

}
const urlAddr = "http://"+fn.getIPAddress();
const runUrl = urlAddr + ":" + config.port;

fn.opn(runUrl+"/"+config.index);
console.log(runUrl);
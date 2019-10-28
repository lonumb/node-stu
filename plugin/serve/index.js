#!/usr/bin/env node  


const http = require("http");
const https = require("https");
const url = require("url");
const fs = require("fs");
const path = require("path");
const mimeTypes = require('./lib/mimeType.json');
const aLib = require('./lib/lib.js');

// 获取命令行后面的参数
const params = aLib.getParams( process.argv.splice(2) );

// 基本参数配置
const config = {
    port:   params.port || 8888, 
    https:  params.https || false,
    index:  params.index || 'index.html',
    open:   params.open === undefined ? '/' : params.open,
    debug:  params.debug === undefined ? true : params.debug
}

// 启动服务
if(config.https){
    var options = {
        pfx: fs.readFileSync('/Users/xxx.pfx'),
        passphrase: 'xxxxxx'
    };
    https.createServer(options,onRequest).listen(config.port);
}else{
    http.createServer((req,res)=>{
        const iUrl = url.parse(req.url,true);
        req.setEncoding('utf8');

        let postData = null;
        req.addListener('data',(postDataChunk)=>{
            postData += postDataChunk;
        });

        req.addListener('end',()=>{
            const pathname = iUrl.pathname.replace(/^\//g,'') || config.index;
            let filePath = path.resolve(process.cwd(),pathname);
            console.log(`filePath:${filePath}`);

            if(fs.existsSync(filePath)){
                if (fs.statSync(filePath).isDirectory()) {
                    filePath = path.join(filePath, indexPage);
                }
                const buffer = fs.readFileSync(filePath);
                const ext = filePath.substring(filePath.lastIndexOf('.') + 1);
                res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
                res.write(buffer);
                res.end();
            }else{
                res.writeHead(404,{"Content-Type" : 'text/plain'});
                res.write('404 Page Not Found');
                res.end();
            }
        })
        


    }).listen(config.port);
}


const runUrl = `${config.https ? 'https' : 'http'}://localhost:${config.port}`;
config.open && aLib.openb(runUrl + config.open);
console.log('Server running on ' + runUrl + config.open);






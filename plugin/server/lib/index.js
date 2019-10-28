
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const mimeType = require("./mimeType.json");
const fn = require("./fn");

const params = fn.readParams(process.argv.splice(2));
console.log(params);

const config = {
    port:   params.port || 9008,
    index:  params.index || "index.html",
    debug:  true
}

// 开启服务
const server = new http.Server();
server.on('request',onRequest);
server.listen(config.port);

// 业务处理
function onRequest(req,res){
    
    req.setEncoding('utf8');

    let postData = null;
    req.on('data',(postDataChunk)=>{
        postData += postDataChunk;
        console.log(postDataChunk);
    })

    req.on('end',()=>{
        let urlname = url.parse(req.url,true);
        urlname = urlname.pathname.replace(/^\//g,'') || config.index;
        let filePath = path.resolve(process.cwd(),urlname);
        console.log(`filePath: ${filePath}`);

        if(fs.existsSync(filePath)){
            if(fs.statSync(filePath).isDirectory()){
                filePath = path.join(filePath,config.index);
            }
            const buffer = fs.readFileSync(filePath);
            const ext = filePath.substring(filePath.lastIndexOf('.')+1);

            res.writeHead(200,{"Content-Type": mimeType[ext] || 'text/plain'});
            res.write(buffer);
            res.end();
        }else{
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end('404 Page \nNot Found');
        }

    })

}

const runPath = "http://localhost:"+config.port;
fn.opn(runPath + "/" + config.index);
console.log('Server running on ' + runPath + "/" + config.index);
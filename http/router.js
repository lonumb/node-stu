const url = require("url");

const list = require('./app/list.js');
// const detail = require('./app/detail.js');
import Detail from './app/detail.js'

const component = {
    "/list": List,
    "/detail": Detail,
}


module.exports = {

    route(req,res){
        let pathname = url.parse(req.url).pathname;
        let executeMethod = component[pathname];

        if(typeof executeMethod === 'function'){
            executeMethod(req,res);
        }else{
            console.log("No request handle :" + pathname);
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("404 Not found");
        }
    }

}

const http = require("http");
const addr = require('../server/getAddress.js');

module.exports = {

    start(router){
        http.createServer(function(request,response){

            router.route(request,response);
            
        }).listen(8888);
    
        console.log("Server has started.");
        console.log("copy http://%s:8888","127.0.0.1");
    }
}
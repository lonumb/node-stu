
const http = require("http");


class server {

    start(router){

        const server = http.createServer(function(req,res){

            router.route(req,res);

        });
        server.listen(8888);
        console.log('http server has started,please open in browser : http://localhost:8888');

    }
}

module.exports = new server();

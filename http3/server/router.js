
const url = require("url");


const router = {

    route: function(request,response){

        response.sendContent = sendContent;

        try {
            let curFileName = "../app" + url.parse(request.url).pathname;
            require(curFileName)(request,response);
        }catch(err){
            response.sendContent("404 Not found",404);
        }

    }

}

function sendContent(content,code){
    this.writeHead(code||200,{"Content-Type":"text/html; charset=utf-8"});
    this.end(content);
}

module.exports = router;


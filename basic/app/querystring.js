const url = require("url");
const querystring = require("querystring");

module.exports = function(request,response){

    let urlObj = url.parse(request.url);
    
    let search = querystring.parse('a=1&b=2&c=3', null, null,{ decodeURIComponent: gbkDecodeURIComponent });

    console.log(search);
    response.sendContent("is querystring page");

}

const path = require("path"); 


module.exports = function(request,response){

    let filesPath = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');

    console.log(filesPath);

    response.sendContent("path");
}
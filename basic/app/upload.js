



module.exports = function(response){
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('1111');
    response.end();

}
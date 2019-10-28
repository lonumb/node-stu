
const exec = require("child_process").exec;

function execTest(response){

    let content = "empty";

    // { timeout: 10000, maxBuffer: 20000*1024 }
    exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 }, function(error,stdout,stderr){
        content = stdout;
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
        
    })

}


module.exports = execTest;
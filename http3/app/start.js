
var exec = require("child_process").exec;
// 阻塞
function start(response){

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(2000);
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('start');
    response.end();

}

module.exports = start;
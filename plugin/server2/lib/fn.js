module.exports.readParams = function(info){
    
    let params = {};
    let key;

    info.forEach(v=>{
        if(/^--\w/.test(v)){
            key = v.replace(/^--/,'');
            params[key] = true;
        }else if(key){
            params[key] = v;
        }
    });

    return params;
}

module.exports.opn = function(url){
    if(!url){
        throw new Error('url can not be null.');
    }
    require("child_process").exec(`${require('os').platform()==='win32'?'start':'open'} ${url}`);
}


module.exports.getIPAddress = function(){
    let interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}

module.exports.getParams = function(info){
    let params = {};
    let key; 

    info.forEach(v=>{
        if(/^--\w/g.test(v)){
            key = v.replace(/^--/g,'');
            params[key] = true;
        }else if(key){
            params[key] = v;
        }
    });
    return params;
}

module.exports.openb = function(url) {
    if (!url) {
        throw new Error('url can not be null.');
    }
    require('child_process').exec(`${require('os').platform() === 'win32' ? 'start' : 'open'} ${url}`);
}
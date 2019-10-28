
const fs = require("fs");
const path = require('path');



module.exports = function(request,response){

    // fs.unlink('/tmp/1.txt',function(err){
        
    //     if(err){
    //         console.log(err);
    //     }
    //     response.sendContent('删除成功');
    // });

    // fs.rename('/text.txt',function(err){
    //     if (err) throw err;
    //     console.log('重命名完成');
    // });

    // let filePath = path.basename('/tmp/1.txt');
    // let env = path.delimiter;
    // let dir = path.dirname('/tmp/test/1.txt');
    // let ext = path.extname('/tmp/test/1.txt');
    // let format = path.format({
    //     dir: '/tmp',
    //     base: '1.txt'
    // })
    // let parse = path.parse('./home/user/dir/file.txt');  parse = JSON.stringify(parse);
    // let abs = path.isAbsolute('/tmp/33/2.txt');
    // let join = path.join('/home','text','tmp','1.txt','../../','/root');
    // let join2 = path.join('www','/a/1111/ln/www','../cd','/');
    // let resolve = path.resolve('www','/a/1111/ln/www','../cd','/');
    // let normal = path.normalize('/home///txt/111/jj/../zj');
    // let posix = path.posix.basename('./skfj/sfjk/files.txt');  
    // let relative = path.relative('/home/www/ln','/home/www/ln/aaa');
    // let sep = path.sep;
    let namepace = path.toNamespacedPath('./home/www');

    response.sendContent(namepace+'');
    

}




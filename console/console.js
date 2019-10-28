
const { Console } = require("console");
const fs = require('fs');
const path = require('path');
const { URL,URLSearchParams} = require('url');


module.exports = function(request,response){


    try {

        // const currentCategory = path.dirname(__filename);
        // const currentFileExt = path.extname(__filename);
        // const currentFileName = path.basename(__filename,currentFileExt);

        const pathObj = path.parse(__filename);

        // create record address
        const outFileName = path.format({
            dir: path.resolve(pathObj.dir,"../log"),
            name: pathObj.name,
            ext: ".log",
        });
        
        const errorOutFileName = path.format({
            dir: path.resolve(pathObj.dir,"../log"),
            name: pathObj.name+"_error",
            ext: ".log",
        });

        
        // createWriteStream 需要保证目录正确，并有操作权限。
        const output = fs.createWriteStream(outFileName,{
            flags: "a"
        });
        const errorOutput = fs.createWriteStream(errorOutFileName,{
            flags: "a"
        });

        const logger = new Console({ stdout: output, stderr: errorOutput }); 

        logger.log("%s","visit success!");

        logger.error("%s","error log!");
        
        
    }catch(err){
        
    }

    response.sendContent('测试');  //  visit success! the page to provide record for node server!
}
const { spawn,exec,execFile } = require('child_process');

const util = require('util');
const execfiles = util.promisify(execFile);
const execs = util.promisify(exec);

// async function getVersion(){
//     const { stdout } = await execfiles('node',['--version'],(err,stdout,stderr)=>{
//         console.log(1,err,stdout,stderr)
//     });
// }
// getVersion();

// async function lsExample(){
//     const { stdout,stderr } = await execs('ls -lh',null,(err,stdout,stderr)=>{
//         console.log(2,err,stdout,stderr);
//     });
    
// }
// lsExample();

const ls = spawn('open',['http://www.baidu.com']);

ls.stdout.on('data',data=>{
    console.log(1,data);
})

ls.stderr.on('data',data=>{
    console.error(2,data);
})

ls.on('close',code=>{
    console.log(3,code);
})




// setInterval(function(){
//     exec('open ./dd.mp3', (err,stdout,stderr)=>{
//         if(err){
//             console.error(0,err); return;
//         }
//         console.log(1,stdout);
//         console.log(2,stderr);
//     });
// },500);

// const child = execFile('node',['--version'],function(err,stdout,sdterr){
//     if(err){
//         throw err;
//     }
//     console.log(stdout);
// })
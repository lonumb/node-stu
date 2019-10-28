
const fs = require("fs");

// 文件描述符 -------------------------------
// openFile('test1.txt');
// openFile('test2.txt');
// openFile('test3.txt');
// function openFile(filepath){
//     fs.open(filepath,'r',(err,fd)=>{
//         if(err) throw err;
//         console.log(fd);
//         fs.close(fd,(err)=>{
//             if(err) throw err;
//         })
//     })
// }


// dirent类 -------------------------------
// print('./');
// function print(path){
//     const dir = fs.readdir(path,{withFileTypes: true},(err,files)=>{
//         for(const dirent of files){
//             console.log(dirent.name);
//         }
//     });
// }


// FSWatcher 类 -------------------------------
// watchFile('./test1.txt');
// function watchFile(path){
//     const wh = fs.watch(path,(event,filename)=>{
//         console.log(event,filename);
//     });
//     wh.on('change',(event,filename)=>{
//         console.log('change=>',event,filename);
//     });
//     wh.on('close',(event,filename)=>{
//         console.log('close=>',event,filename);
//     });
//     setTimeout(()=>{
//         wh.close();
//     },60000)
// }


// ReadStream 类 -------------------------------
// stream('./test1.txt');
// function stream(path){
//     const stm = fs.createReadStream(path,{encoding:'utf8',start: 3});
//     stm.on('error',(err)=>{
//         console.log('error=>',err);
//     });
//     stm.on('open',(fd)=>{
//         console.log('open=>',fd);
//     });
//     stm.on('ready',()=>{
//         console.log('ready=>ready complete');
//         console.log(stm.path);
//         console.log(stm.bytesRead);
//         console.log(stm.pending);
//     });
//     stm.on('data',(chunk)=>{
//         console.log('data=>',chunk);
//     });
//     stm.on('end',()=>{
//         console.log('end=>');
//     });
//     stm.on('close',(err)=>{
//         console.log('close=>',err);
//     });
// }


// Stats 类 -------------------------------
// stat('./test1.txt');
// function stat(path){
//     const st = fs.stat(path,{bigint: true},(err,stats)=>{
//         console.log('err =>', err);
//         console.log('isBlockDevice =>', stats.isBlockDevice() )
//         console.log('isCharacterDevice =>', stats.isCharacterDevice() )
//         console.log('isDirectory =>', stats.isDirectory() )
//         console.log('isFIFO =>', stats.isFIFO() )
//         console.log('isFile =>', stats.isFile() )
//         console.log('isSymbolicLink =>', stats.isSymbolicLink() )
//         console.log('dev =>', stats.dev )
//         console.log('uid =>', stats.uid )
//         console.log('size =>', stats.size )
//         console.log('atime =>', stats.atime )
//         console.log('mtime =>', stats.mtime )
//     });
// }


// WriteStream 类 -------------------------------
// write('./test1.txt');
// function write(path){
//     const ws = fs.createWriteStream(path,{flags: 'a'});
//     ws.on('error',(err)=>{
//       console.log('error=>',err);
//     })
//     ws.on('open',(fd)=>{
//       console.log('open=>',fd);
//     })
//     ws.on('finish',()=>{
//       console.log('finish=>',fs.readFileSync(path, 'utf8'));
//     })
//     ws.on('close',()=>{
//       console.log('文件已关闭！');
//     })
//     let i = 1;
//     let timer = setInterval(()=>{
//       i++;
//       ws.write('测试一段文字 \n');
//       console.log('测试一段文字 \n');
//       if(i>10){
//         clearInterval(timer);
//         ws.end();
//       }
//     },1000)
// }


// fs操作方法 -------------------------------

// fs.access('./test2.txt',fs.constants.W_OK,(err)=>{
//     console.log(err ? '0': '1');
// })
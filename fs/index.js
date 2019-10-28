
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
//     },10000)
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
//     stm.on('ready',(err)=>{
//         console.log('ready=>',err);
//         console.log(stm.path);
//         console.log(stm.bytesRead);
//         console.log(stm.pending);
//     });
//     stm.on('data',(chunk)=>{
//         console.log('data=>',chunk);
//     });
//     stm.on('end',(err)=>{
//         console.log('end=>',err);
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
const writer = getWritableStreamSomehow();
for (let i = 0; i < 100; i++) {
  writer.write(`写入 #${i}!\n`);
}
writer.end('写入结尾\n');
writer.on('finish', () => {
  console.error('写入已完成');
});
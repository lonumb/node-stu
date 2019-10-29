
const http = require('http');

http.get({
    host: 'localhost',
    port: 9002,
    path: '/',
    agent: false
},(res)=>{
    console.log(res);
}).on('socket',(socket)=>{
    socket.emit('agent');
})
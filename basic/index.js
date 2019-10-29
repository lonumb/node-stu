
// require('babel-register');
const server = require('./server/server');
const router = require('./server/router');

const mysql = require("mysql");

console.aaa = 1;

server.start(router);



const start = require("./app/start");
const upload = require("./app/upload");
const execTest = require("./app/execTest");
const sql = require("./app/sql");
const files = require("./app/files");
const path = require("./app/path");
const uri = require("./app/uri");
const consoles = require("./app/console");


const components = {
    '/': start,
    '/start': start,
    '/upload': upload,
    '/execTest': execTest,
    '/sql': sql,
    '/files': files,
    '/path': path,
    '/uri': uri,
    '/console': consoles,
}

module.exports = components;

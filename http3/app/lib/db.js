
const mysql = require('mysql');

module.exports = mysql.createConnection({
    host:       '47.103.42.15',
    user:       'root',
    password:    'sjw@1234',
    database:   'timeout'
});
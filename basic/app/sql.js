
const mysql = require('mysql');
const { URL,URLSearchParams } = require("url");

const conn = mysql.createConnection({
    host:       '47.103.42.15',
    user:       'root',
    password:    'sjw@1234',
    database:   'timeout'
});

conn.connect();


module.exports = function(req,request){

    // console.log();

    let myurl  = new URL(req.url,'http://localhost:8888');
    let params = new URLSearchParams(myurl.searchParams);
    let id  = params.get('id')

    // let sql = "insert into lo_test (content) values('"+ content + (new Date()) +"')";
    let sql = "select * from lo_test limit 0,3";


    conn.query(sql,function(error,res,fields){

        console.log( JSON.stringify(res));
        request.sendContent(JSON.stringify(res));
    
    })
    

    

    

}

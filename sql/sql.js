var mysql =  require('mysql');         
var moment = require('moment');         
var pool =  mysql.createPool({
  host : "172.16.17.22",
  user : "root",
  password: "root",
  port : '3306',
  database:'guoding'
});
var query = (sql,callback) => {
    pool.query(sql,function(err,results,fields){
        callback(err,results,fields);
    })
}
var insert = (sql,sqlparams,callback) => {
    pool.query(sql,sqlparams,function(err,results,fields){
        callback(err,results,fields);
    })
}
exports.query = query;
exports.insert = insert;
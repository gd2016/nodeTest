var query = require('../sql/sql').query;

exports.getTotal=function(tbl,callback){
    query(`select count(1) as total from ${tbl}`,callback);
}

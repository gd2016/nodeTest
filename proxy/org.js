var query = require('../sql/sql').query;
var insert = require('../sql/sql').insert;
var update = require('../sql/sql').insert;
var moment = require('moment');   
exports.getOrgName=function(org_id,callback){
    query(`select ORG_NAME from TBL_ORGANIZATION WHERE ORG_ID='${org_id}'`,callback);
}
exports.getOrg=function(org_id,callback){
    query(`select * from TBL_ORGANIZATION WHERE ORG_ID='${org_id}'`,callback);
}

exports.queryOpendOrgById = function(id,callback){
    query(`select * from tbl_organization where ORG_STATUS=0`,callback);
}

exports.queryAllOrgById = function(callback){
    query(`select * from tbl_organization`,callback);
}

exports.checkOrgName = function(name,callback){
    query(`select * from tbl_organization where ORG_NAME='${name}'`,callback);
}

exports.addOrg = function(sqlparams,callback){
    insert(`insert into tbl_organization(ORG_NAME,ORG_PARENT_ID,ORG_CONTACT,ORG_TEL,ORG_ADDRESS,REMARK,ORG_CREATED_DATETIME) values(?,?,?,?,?,?,'${moment().format('YYYY-MM-DD HH:mm:SS')}')`,sqlparams,callback);
}

exports.updateOrg=function(id,sqlparams,callback){
    update(`update tbl_organization SET ORG_NAME= ? ,ORG_PARENT_ID= ? ,ORG_CONTACT= ? ,ORG_TEL= ? ,ORG_ADDRESS= ? ,REMARK= ?  where ORG_ID='${id}'`,sqlparams,callback);
}

exports.updateOrgStatus=function(id,status,callback){
    update(`update tbl_organization set ORG_STATUS ='${status}' where ORG_ID='${id}'`,callback);
}
var query = require('../sql/sql').query;
var update = require('../sql/sql').insert;
exports.getUser = function (username,password,callback){
    query(`SELECT
                tuser.*, torg.ORG_NAME
            FROM
                tbl_user AS tuser,
                tbl_organization AS torg
            WHERE
                tuser.ORG_ID = torg.ORG_ID 
            and USER_NAME = '${username}'
            AND USER_PASSWORD = '${password}'`,callback);
}

exports.getUserById = function (id,callback){
    query(`select * from TBL_USER WHERE USER_ID='${id}'`,callback);
}

exports.getUserLoginInfo=function(id,callback){
    query(`SELECT
                tuser.REMARK,tuser.IC_CARD_NO,
                tuser.USER_ID,tuser.USER_NAME,tuser.USER_NICK_NAME,torg.ORG_NAME,tul.LOGON_LAST_DATETIME,tul.LOGON_LAST_IP
            FROM
                tbl_user AS tuser,
                tbl_organization as torg,
                tbl_user_logon as tul
            WHERE
                tuser.ORG_ID = torg.ORG_ID
            AND tul.USER_ID = tuser.USER_ID
            AND tuser.USER_ID = '${id}'
            AND tul.LOGON_PLATFORM='0'`,callback);
}

exports.getPopedoms = function(id,callback){
    query(`SELECT
                tp.POPEDOM_ID ,
                tp.POPEDOM_NAME,
                tp.POPEDOM_PARENT_ID,
                tp.ACTION_LINK,
                tp.ICON_LINK,
                tp.BUTTON_LINK,
                tp.POPEDOM_BUTTON
            FROM
                tbl_user AS tu,
                tbl_role_organization AS tro,
                tbl_role_popedom AS trp,
                tbl_popedom AS tp
            WHERE
                tu.ORG_ID = tro.ORG_ID
                AND tro.ROLE_ID = trp.ROLE_ID
                AND tp.POPEDOM_ID = trp.POPEDOM_ID
                AND tu.USER_ID = '${id}'`,callback);
}

exports.getAllUser = function(page,rows,callback){
    query(`SELECT
                tro.ORG_NAME,
                tu.*
            FROM
                tbl_user AS tu,
                tbl_organization AS tro
            WHERE
                tu.ORG_ID = tro.ORG_ID  limit ${(page-1)*rows}, ${rows}`,callback);
}

exports.updateUserStatus=function(id,status,callback){
    update(`update tbl_user set USER_STATUS ='${status}' where USER_ID='${id}'`,callback);
}
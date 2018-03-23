var User  = require('../proxy/user');
var Org   = require('../proxy/org');
var Tool  = require('../proxy/tool');
var async = require('async');
var moment= require('moment');
exports.getUserInfo=function(req,res,next){
    var ip = req.ip;
    User.getUserLoginInfo(req.session.user.USER_ID,function(err,results){
        if(err) return next(err);
        res.json(results[0]);
    })
}

exports.queryPopedomsById=function(req,res,next){
    User.getPopedoms(req.session.user.USER_ID,function(err,results){
        if(err) return next(err);
        var result=results.concat();
        var popedomData={};
        popedomData.nav=results[0];
        popedomData.popedoms=result
        tochildren(popedomData.nav,results);
        res.json(popedomData);
    })
}
function tochildren(data,results){
    data.children=[];
    for (var index = 1; index < results.length; index++) {
        if((results[index].POPEDOM_PARENT_ID==data.POPEDOM_ID)&&results[index].POPEDOM_ID!="10004"){
            data.children.push(results[index]);
        }
    }
    if(data.children.length){
        for (var j = 0; j < data.children.length; j++) {
            tochildren(data.children[j],results);
        }
    }
}

exports.queryAllUser=function(req,res,next){
    async.auto({
        rows:function(callback){
            User.getAllUser(req.body.page||1,req.body.rows||10,function(err,results){
                if(err) return next(err);
                results.forEach(function(element) {
                    if(element.USER_STATUS=="1"){
                        element.status="启用"
                    }else if(element.USER_STATUS=="2"){
                        element.status="停用"
                    }else if(element.USER_STATUS=="3"){
                        element.status="注销"
                    }else{
                        element.status="非法字符"
                    }
                }, this);
                callback(null,results);
            })
        },
        total:function(callback){
            Tool.getTotal('tbl_user',function(err,results){
                if(err) return next(err);
                callback(null,results[0].total);
            })
        }
    },function(err,results){
        if(err) return res.json(err);
        res.json(results);
    })
}

exports.openUser=function(req,res,callback){
    User.updateUserStatus(req.body.userId,1,function(err,results){
        if(err) return next(err);
        res.json({type:true});
    })
}

exports.closeUser=function(req,res,callback){
    User.updateUserStatus(req.body.userId,2,function(err,results){
        if(err) return next(err);
        res.json({type:true});
    })
}

exports.deleteUser=function(req,res,callback){
    User.updateUserStatus(req.body.userId,3,function(err,results){
        if(err) return next(err);
        res.json({type:true});
    })
}


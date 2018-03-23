var User  = require('../proxy/user')
var Org   = require('../proxy/org')
var async = require('async')
var auth  = require('../middlewares/auth')
var config = require('../config');
exports.signin = function (req,res,next){
    var username=req.body.userName;
    var password=req.body.userPassword;
    User.getUser(username,password,function(err,results){
        if(err) return next(err);
        if(results.length>0){
            if(results[0].USER_STATUS=='3'){
                res.json({code:0,message:'用户已被注销'});
            }else if(results[0].USER_STATUS=='2'){
                res.json({code:0,message:'用户已被停用'});
            }else if(results[0].ORG_STATUS=="1"){
                res.json({code:0,message:'该用户所属机构已停用'});
            }else{
                User.getUserById(results[0].USER_ID,function(err,user){
                    if(err) return next(err);
                    req.session.user=user[0];
                    res.json({code:1,message:'登录成功'});
                })
            }
        }else{
            res.json({code:0,message:'用户名或密码错误'});
        }
    })
}

exports.signout=function(req,res,callback){
    req.session.destroy();
    res.clearCookie(config.auth_cookie_name, { path: '/' });
    res.json();
}
var config = require('../config');
var User = require('../proxy/user');
exports.setCookie = function(userid,res){
    var options = {
        path:'/',
        maxAge:5000*60,
        signed:true,
        httpOnly:true
    }
    res.cookie(config.auth_cookie_name, userid, options);
}

exports.authUser = function(req,res,next){
    // if(!req.session.user){
    //     var auth_token=req.signedCookies[config.auth_cookie_name];
    //     if(!auth_token){
    //         if(req.path=="/api/v1/login"){
    //             return next()
    //         }else{
    //             res.status(404);
    //             return res.json();
    //         }
    //         return next();
    //     }else{
    //         User.getUserById(auth_token,function(err,user){
    //             if(err) return next(err);
    //             req.session.user=user[0];
    //             return next();
    //         })
    //     }
    // }else{
    //     return next();
    // }
    console.log(req.session.user);
    if(!req.session.user){
        if(req.path=="/api/v1/login"){
            return next()
        }else{
            res.status(404);
            res.end();
        }
    }else{
        return next();
    }
    
}
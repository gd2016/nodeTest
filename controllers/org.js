var Org   = require('../proxy/org');
exports.queryOpendOrgById=function(req,res,next){
    Org.queryOpendOrgById('',function(err,results){
        if(err) return next(err);
        res.json(results);
    })
}

exports.queryAllOrgById=function(req,res,next){
    Org.queryAllOrgById(function(err,results){
        if(err) return next(err);
        results.forEach(function(element) {
            if(element.ORG_STATUS=="0"){
                element.status="启用"
            }else if(element.ORG_STATUS=="1"){
                element.status="停用"
            }else if(element.ORG_STATUS=="2"){
                element.status="注销"
            }else{
                element.status="非法字符"
            }
        }, this);
        res.json(results);
    })
}

exports.checkOrgName=function(req,res,next){
    Org.checkOrgName(req.body.orgName,function(err,results){
        if(err) return next(err);
        if(results.length){
            res.json({type:false})
        }else{
            res.json({type:true})
        }
    })
}

exports.insertOrg=function(req,res,next){
    var arr=[];
    Object.keys(req.body).forEach((key)=>{
        arr.push(req.body[key])
    })
    Org.addOrg(arr,function(err,results){
        if(err) return next(err);
        res.json({type:true})
    })
}

exports.updateOrg=function(req,res,next){
    var arr=[];
    Object.keys(req.body).forEach((key)=>{
        if(key=="orgId") return true;
        arr.push(req.body[key])
    })
    Org.updateOrg(req.body.orgId,arr,function(err,results){
        if(err) return next(err);
        res.json({type:true})
    })
}

exports.closeOrg=function(req,res,next){
    Org.updateOrgStatus(req.body.orgId,1,function(err,results){
        if(err) return next(err);
        res.json({type:true})
    })
}

exports.deleteOrg=function(req,res,next){
    Org.updateOrgStatus(req.body.orgId,2,function(err,results){
        if(err) return next(err);
        res.json({type:true})
    })
}

exports.openOrg=function(req,res,next){
    Org.updateOrgStatus(req.body.orgId,0,function(err,results){
        if(err) return next(err);
        res.json({type:true})
    })
}
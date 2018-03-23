var express = require('express');
var router = express.Router();
var sign = require('../controllers/sign');
var user = require('../controllers/user');
var org = require('../controllers/org');
var fs   = require('fs');
var path = require('path');
/* GET home page. */
var query =require('../sql/sql')
// router.get('*', function(req, res, next) {
//   const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
//   res.send(html) 
// });
router.all('/api/v1/login', sign.signin);
router.all('/api/v1/exit',sign.signout);

router.all('/api/v1/queryUserInfo', user.getUserInfo);
router.all('/api/v1/queryPopedomsById',user.queryPopedomsById);
router.all('/api/v1/queryAllUser',user.queryAllUser);
router.all('/api/v1/openUser',user.openUser);
router.all('/api/v1/deleteUser',user.deleteUser);
router.all('/api/v1/closeUser',user.closeUser);

router.all('/api/v1/queryOpendOrgById',org.queryOpendOrgById);
router.all('/api/v1/queryAllOrgById',org.queryAllOrgById);
router.all('/api/v1/checkOrgName',org.checkOrgName);
router.all('/api/v1/insertOrg',org.insertOrg);
router.all('/api/v1/closeOrg',org.closeOrg);
router.all('/api/v1/deleteOrg',org.deleteOrg);
router.all('/api/v1/openOrg',org.openOrg);





module.exports = router;

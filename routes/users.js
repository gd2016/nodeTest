var express = require('express');
var router = express.Router();
var query =require('../sql/sql')
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  query('select * from TBL_USER', function (error, results, fields) {
    if (error) throw error;
    else{
        console.log(results)   
        res.json(results)
    } 
  });

  // query(,(err,results) => {
  //   console.log(results);
  //   res.send(results)
  // })
  // var id=req.query.id;
  // var auth_token = id + '$$$$'; // 以后可能会存储更多信息，用 $$$$ 来分隔
  // var opts = {
  //   path: '/',
  //   maxAge: 1000 * 60 * 60 * 24 * 30,
  //   signed: true,
  //   httpOnly: true
  // };
  // res.cookie('session', auth_token, opts);
  // console.log(req.signedCookies['session']);
  // res.redirect('/');
});

module.exports = router;

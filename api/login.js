var express = require('express');
var router = express.Router();
var {appid,appSecret} = require('../config/defaultConfig')

router.post('/login',function(req,res){
    console.log(appid)
    console.log(appSecret)
    //https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
    // res.status(401).send('invalid token')
    res.status(200).send({token:'123dewqr21rfeqwrqwdadqwd'})
    // res.send(1)
})
module.exports = router
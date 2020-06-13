var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    layout: false,
    title: "首页",
    personInfoList: [{
        name: "王炮儿(一拳超人)",
        age: 20
    }, {
        name: "炮姐(御坂美琴)",
        age: 15
    }]
});
});

module.exports = router;

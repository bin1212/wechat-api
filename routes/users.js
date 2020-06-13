var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test_1', function(req, res, next) {
  res.status(401).send('invalid token')
});
router.get('/test_2', function(req, res, next) {
  res.status(200).send('2');
});
router.get('/test_3', function(req, res, next) {
  res.status(200).send('3');
});
module.exports = router;

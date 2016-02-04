var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { compliments: [
                        'Your instructors love you',
                        'High five = ^5',
                        'Is it Ruby Tuesday yet?',
                        'Its almost beer o clock',
                        'The Force is strong with you'],
                        num: function(){
                          return compliments[Math.floor(Math.random(10) * compliments.length)];
                        }
                      })
});


module.exports = router;

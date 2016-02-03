var express = require('express');
var router = express.Router();
var receipient = req.body.to;
var textMessage = req.body.message;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/'), function(req, res, next) {
	// Twilio Credentials
  var accountSid = 'AC59037293157be6ad8c57825913ebddef';
  var authToken = '1ffd40d287408c46ac2c69c82fdac4f1';

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({
    to: receipient,
    from: "+15126498066",
    body: textMessage,
  }, function(err, message) {
    console.log(message.sid);
  });
  res.render('index', { title: 'Express' });
}

module.exports = router;

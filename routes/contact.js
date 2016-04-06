var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');

var contactRouter = module.exports = exports = express.Router();

var config = wellknown('Gmail');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'timmwebsite@gmail.com',
    pass: process.env.MAIL_PW
  }
});

contactRouter.post('/', function(req, res) {
  var mailOptions = {
    from: {name: 'Portfolio Page', address: 'timmwebsite@gmail.com'},
    to: {name: 'Tim Miller', address: 'timcmiller@live.com'},
    subject: 'Message from Portfolio Contact Form',
    text: 'Name: ' + req.body.name + '\n' + 'Body: ' +
    req.body.message  + '\n' + '\n' + 'You may contact this sender at: ' +
    req.body.email
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

  res.send('Your Message has been sent');
});

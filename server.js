var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var contactRouter = require(__dirname + '/routes/contact');

app.use(express.static(__dirname + '/build/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/contact', contactRouter);

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(port, function() {
  console.log('Server up on port ' + port + '.');
});

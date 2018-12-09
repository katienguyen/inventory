var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var cors = require('cors');

var app = express();

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"./src")));

// enable all CORS requests
app.use(cors());

let port = 5000 || process.env.PORT

app.post('/login', function (req, res) {
  var user_name=req.body.username;
  var password=req.body.password;
  if(user_name =='admin' && password =='admin'){
      res.send('success');
  }
  else{
    res.send('Failure');
  }
});

// start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
  });
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var cors = require('cors');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080; // set our port
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'root response'
  });
});

router.route('/demo')
  .post(function(req, res) {
    res.json({
      message: 'response from demo via POST'
    });
  })
  .get(function(req, res) {
    res.json({
      message: 'response from demo via GET'
    });
  });

router.get('/not200', function(req, res) {
  res.status(400);
  res.send('sending status code 400');
});

router.get('/beer/:id', function(req, res) {
  res.status(200);
  response = {
    id: 32112,
    style: 'farmhouse',
    abv: '7%'
  }
  res.send(response);
})

router.route('/beer')
  .post(function(req, res) {
    response = req.body;
    console.log(req.body.id);
    response.id = 123123123123;
    res.send(response);
  })
  .get(function(req, res) {
    response = [{
      id: 98098,
      style: 'lager',
      abv: '6%'
    }, {
      id: 32112,
      style: 'ale',
      abv: '5%'
    }, {
      id: 32112,
      style: 'farmhouse',
      abv: '7%'
    }]
    res.send(response);
  });


// additional routes go here

// prefix calls with '/api'
app.use('/api', router);

app.listen(port);
console.log('Server running at http://localhost:' + port + '/api');

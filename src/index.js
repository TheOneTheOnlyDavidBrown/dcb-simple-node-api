import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

let app = express(); // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000; // set our port
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'root response',
  });
});

// EXAMPLE ROUTES

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

router.get('/status400', function(req, res) {
  res.status(400);
  res.send('sending status code 400');
});

router.get('/item/:id', function(req, res) {
  res.status(200);
  let response = {
    id: 32112,
    name: `path: /item/:id1, id: ${req.params.id}`,
  };
  res.send(response);
});

router.route('/item')
  .post(function(req, res) {
    let response = req.body;
    console.log(req.body.id);
    response.id = 123123123123;
    res.send(response);
  })
  .get(function(req, res) {
    let response = [{
      id: 98098,
      name: 'item 1',
    }, {
      id: 32112,
      name: 'item 2',
    }, {
      id: 32112,
      name: 'item 3',
    }];
    res.send(response);
  });

// END EXAMPLE ROUTES

// additional routes go here

// prefix calls with '/api'
app.use('/api', router);

app.listen(port);
console.log('Server running at http://localhost:' + port + '/api');

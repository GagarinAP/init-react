var express = require('express');
var router = express.Router();

var users = [
  {
    name: 'Andrew',
    age: 25
  },
  {
    name: 'Petro',
    age: 28
  },
  {
    name: 'Sergio',
    age: 33
  }
]
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;

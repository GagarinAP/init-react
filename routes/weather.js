var express = require('express');
var router = express.Router();

var weather = [
  {
    date: '12.12.1984',
    temp: 2.4,
    wind: 14,
    humidity: 88
  },
  {
    date: '13.12.1984',
    temp: 2.2,
    wind: 12,
    humidity: 98
  },
  {
    date: '14.12.1984',
    temp: 4,
    wind: 5,
    humidity: 84
  },
  {
    date: '15.12.1984',
    temp: 3,
    wind: 13,
    humidity: 87
  },
  {
    date: '16.12.1984',
    temp: 5,
    wind: 8,
    humidity: 86
  },
  {
    date: '17.12.1984',
    temp: 3.4,
    wind: 11,
    humidity: 89
  },
  {
    date: '18.12.1984',
    temp: 2,
    wind: 2,
    humidity: 89
  },
  {
    date: '19.12.1984',
    temp: 1,
    wind: 6,
    humidity: 92
  },
  {
    date: '20.12.1984',
    temp: 4,
    wind: 7,
    humidity: 93
  },
  {
    date: '21.12.1984',
    temp: 4,
    wind: 5,
    humidity: 84
  }
]
router.get('/', function(req, res, next) {
  res.send(weather);
});

module.exports = router;

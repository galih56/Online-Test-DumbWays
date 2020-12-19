var express = require('express');
var router = express.Router();
var dbConn = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  dbConn.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
    if (err) {
      req.flash('error', err);
      res.render('index', { data: '' });
    } else {
      res.render('index', { data: rows });
    }
  });
});

module.exports = router;

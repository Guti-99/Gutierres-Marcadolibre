var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

router.get('/mis-compras', function(req, res, next) {
  res.render('mis-compras');
})
module.exports = router;

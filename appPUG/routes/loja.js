var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loja', { title: 'Loja' });
});

router.get('/camisetas', function(req, res, next) {
  res.render('camisetas', { title: 'Camsisetas' });
});

router.get('/camisetas/mangalonga', function(req, res, next) {
  res.render('mangalonga', { title: 'Camiseta manga longa' });
});

router.get('/bermudas', function(req, res, next) {
  res.render('bermudas', { title: 'Bermudas' });
});

module.exports = router;

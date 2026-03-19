var express = require('express');
var router = express.Router();

//simulando uma loja, onde cada rota é um produto diferente
 const produtos = [
  { id: 1, nome: 'Camiseta', preco: 29.99 },
  { id: 2, nome: 'Bermuda', preco: 49.99 },
  { id: 3, nome: 'Tênis', preco: 89.99 }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loja', { title: 'Loja' });
});

router.get('/camisetas', function(req, res, next) {
  res.render('camisetas', { produtos });
});

/*router.get('/camisetas/mangalonga', function(req, res, next) {
  res.render('mangalonga', { produto: produtos[1] });
});*/

router.get('/bermudas', function(req, res, next) {
  res.render('bermudas', { produtos });
});

module.exports = router;

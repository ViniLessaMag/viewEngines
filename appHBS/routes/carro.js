var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  const carro = [
    {
      nome: "Ferrari",
      desc: "Carro esportivo italiano",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      nome: "Lamborghini",
      desc: "Super carro de luxo",
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753"
    },
    {
      nome: "Tesla",
      desc: "Carro elétrico moderno",
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    }
  ];

  res.render('carro', { carro: carro });

});

module.exports = router;
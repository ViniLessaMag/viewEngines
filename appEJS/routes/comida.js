var express = require('express');
var router = express.Router();

/* GET pagina de comida */
router.get('/', function(req, res, next) {

  const comidas = [
    {
      nome: "Pizza",
      desc: "Pizza artesanal deliciosa",
      img: "https://images.unsplash.com/photo-1601924582975-7e4d0c63c8c3"
    },
    {
      nome: "Hambúrguer",
      desc: "Hambúrguer suculento com queijo",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      nome: "Sushi",
      desc: "Sushi fresco preparado na hora",
      img: "https://images.unsplash.com/photo-1562158070-622a2c1d9d3b"
    }
  ];

  res.render('comida', { 
    title: 'Comida',
    comidas: comidas
  });

});

module.exports = router;

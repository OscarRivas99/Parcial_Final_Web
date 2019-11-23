let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Fruta = require('./../models/fruta');


/* GET home page. */
router.get('/', (req, res, next) => {
  Fruta.find((err, frutas) => {
   
    if (err) throw err;
    res.render('index', { frutas: frutas });
  });
});

router.get('/fruta/nuevo', (req, res, next) => {
  res.render('frutaForm', {});
});

router.get('/fruta/modificar/:id', (req, res, next) => {
  let idFruta = req.params.id;  
  Fruta.findOne({_id: idFruta }, (err, fruta) => {
  
    if (err) throw err;
    res.render('frutaForm', { fruta: fruta });
  });
});

router.get('/fruta/eliminar/:id', (req, res, next) => {
  let idFruta = req.params.id;

  Fruta.remove({_id: idFruta }, (err) => {
    if (err) throw err;
    //o llamar nuevamente a find() y res.render();
    res.redirect('/');
  });
});

module.exports = router;

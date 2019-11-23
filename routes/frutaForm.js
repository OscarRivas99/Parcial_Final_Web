let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Fruta = require('./../models/fruta');

router.post('/fruta/operar', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let fru = new Fruta({
      tipo: req.body.tipo,
      nombre: req.body.nombre,
      peso: req.body.peso,
      color: req.body.color,
      arboles: req.body.arboles,
      //crece_en_arboles: req.body.crece_en_arboles,
      calorias: req.body.calorias
      });
    
    fru.save();
  } else {    
    //console.log(req.body._id);
    Fruta.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});


module.exports = router;

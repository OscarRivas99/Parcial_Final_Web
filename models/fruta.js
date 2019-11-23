let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let frutaSchema = new Schema({
    id: { type: String },
    tipo:{ type: String},
    nombre: { type: String,
            required: true },
    peso: { type: Number, min: 0 , required: true },
    color: { type: String , required: true },
      arboles: { type: String , required: true },
    // crece_en_arboles:{type: String , required:true },
    calorias: { type: Number, min: 0 , required: true}
}, { versionKey: false });

let Fruta = mongoose.model('Frutas', frutaSchema);

module.exports = Fruta;
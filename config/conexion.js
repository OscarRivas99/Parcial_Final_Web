let mongoose = require('mongoose');

mongoose.connect('/crud-frutas-parcial', { useMongoClient: true }); //mongodb+srv://OscarR:root@cluster0-xxunr.mongodb.net/test?retryWrites=true&w=majority

module.exports = mongoose;
//mongodb://localhost/crud-frutas-parcial
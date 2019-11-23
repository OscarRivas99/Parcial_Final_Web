let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://OscarR:root@cluster0-xxunr.mongodb.net/test?retryWrites=true&w=majority', { useMongoClient: true }); //mongodb+srv://OscarR:root@cluster0-xxunr.mongodb.net/test?retryWrites=true&w=majority

module.exports = mongoose;
//mongodb://localhost/crud-frutas-parcial
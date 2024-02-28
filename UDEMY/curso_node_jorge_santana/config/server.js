var express = require('express')();
//var express = requiere('express');
//var app = express();
//mesma coisa que em cima;

//indica que o ejs vai ser o motor de views
express.set('view engine', 'ejs');
express.set('views', './app/views');

module.exports = express;
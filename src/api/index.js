const inventario = require('./inventario'); //establece respuestas a 'root' y a '/:id?/:name?'
const express = require('express');
const Inventarios = require('../models/Inventarios');
const app = express();

app.use('/inventarios',inventarios); //establece respuestas a '/inventarios' y a '/Inventarios/:id?/:name?'

module.exports = app; //devuelve un objeto express
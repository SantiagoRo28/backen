const { config } = require('./config/config'); //objeto con info estática sobre la base de datos
const api = require('./src/api'); //establece respuestas a '/inventarios' y a '/restaurants/:id?/:name?'
const path = require('path');
tario
require("./database/connection"); //hace disponibles las tablas User, Role, Category y Invens
require("./src/middlewares/File"); //iniciando el middleware para el archivo


const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api); //establece respuestas a a '/api/inventarios' y a '/api/inventarios/:id?/:name?'

app.get('/files/:file?', (req,res)=>{
  const options = {
    root: path.join(__dirname)
  };
  
app.get('/',(req,res)=>{
   res.json({title:'Hello from api'});
});


  var fileName = 'files/'+req.params.file;
  res.sendFile(fileName, options);
});

app.post('/create/user',(req,res) => {
  const data = req.body;
  console.log(data);
});

app.listen(config.port, () => {
  console.log('el servidor esta corriendo =) ');
});

app.listen(config.port, () => {
  console.log('el servidor esta corriendo =) ');
}); //mantiene escucha en el puerto establecido en config
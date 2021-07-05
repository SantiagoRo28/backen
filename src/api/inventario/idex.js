const express = require("express");
const inventarios = require("../../controllers/inventarios"); //objeto con Inventarios
const { Inventario } = require("../../../database/connection");
const bodyParser = require("body-parser");
const app = express();
const {upload} = require('../../middlewares/File');


//sirve para recibir el body en una peticion post, dependiendo la versión de node se los pedira o no yo creo que estoy desactualizado
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get Inventarios
//localhost:4000/api/inventarios/
app.get("/",(req,res) => inventarios.Inventarios(req,res));

//post Inserting Inventarios
app.post("/",upload.single('file'), async (req, res) => {
  let data = req.body;

 data.profile_picture = 'localhost:4000/'+req.file.path;
 console.log(req.file);
  const inventario = await Inventarios.create(data);

  res.json(inventario);
});

//filter a inventario
app.get("/:id?", async (req, res) => {
  const id = req.params.id;

  const inventario = await Inventario.findAll({
    where: {
      id: id,
    },
    attributes: ["name", "address"],
  });
  if (inventario.length == 0) {
    res.status(500).json({ error: "id is invalid" });
  }

  res.json(inventario);
});

//
//update a inventario
app.put("/:id?", async (req, res) => {
  const inventario_id = req.params.id;
  const data = req.body;

  const inventario = await Inventario.update(data, {
    where: {
      id: inventario_id,
    },
  });

  if (inventario[0] === 1) {
    res.status(200).json({ message: "La operación fue realizada con exito" });
  } else {
    res.status(500).json({ error: "id is invalid" });
  }
});

app.delete("/:id?", async (req, res) => {
  const id = req.params.id;
  const inventario = await Inventario.destroy({
    where: {
      id: id,
    },
  });

  if(inventario == 0){
    res.status(500).json({ error: "id is invalid" });
  }else{
    res.status(200).json({ message: "La operación fue realizada con exito" });
  }

});
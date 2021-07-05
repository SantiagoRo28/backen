const {Inventarios}  = require('../../database/connection');

const getInventarios = async (req,res) => {
  const inventarios = await Inventario.findAll({
    attributes: ["name", "address", "fecha"],
  });

  res.json(inventarios);
}
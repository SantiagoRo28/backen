
 const {confing} = require('../confing/confing');
 const initalModels = require('../src/models');

 const sequelize = require("sequelize");

 const connection = new Sequelize(confing.database_name, confing.database_user, confing.database_password, {
     host: 'localhost',
     dialect: 'mysql'
 });

 const { User, Role, Category, Inventarios } = initalModels(connection, sequelize);

 connection.sync({ force: false }).then(() => {
    console.log("wiii! funciono");
    seeders(); //luego se agregan los registros "admin" y "user"


}).catch(e => {
    console.log(e);
});


module.exports = {

    User,
    Role,
    Category,
    Inventarios

}
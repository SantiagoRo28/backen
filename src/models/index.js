module.exports = (connection, sequelize) => {


    const Inventarios = require("./Inventarios")
    const Categories = require("./Categories");
    const Users = require("./Users");
    const Roles = require("./Roles");

    const InventariosModel = Inventarios(connection,sequelize);
    const categoriesModel = Categories(connection,sequelize);
    const usersModel = Users(connection,sequelize);
    const rolesModel = Roles(connection,sequelize);

    //belongsTo //belongsToMany //hasOne
    restaurantModel.belongsto(categoriesModel,{foreignKey: 'category_id'});
    usersModel.belongsToMany(roles)

    return 




}
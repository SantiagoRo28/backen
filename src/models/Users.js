module.exports = (connection,sequelize) => {

    return connection.define("users",{
        id: {
            type: sequelize.INTEGRER
        }
    });
};
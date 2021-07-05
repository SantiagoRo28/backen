module.exports = (connection, sequelize) => {
    return connection.define('categories', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING
    });
}
const { DataTypes } = require("sequelize")

module.exports = {
    players: DataTypes.JSON,
    total_bet: DataTypes.INTEGER
}
const { DataTypes } = require("sequelize")

module.exports = {
    player: DataTypes.TEXT,
    bet_amount: DataTypes.INTEGER,
    reward: DataTypes.INTEGER,
}
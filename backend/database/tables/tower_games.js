const { DataTypes } = require("sequelize")


module.exports = {
    player: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    reward: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER
}
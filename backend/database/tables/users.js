const { DataTypes } = require("sequelize")

module.exports = {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,

    avatarId: {
        default: null,
        type: DataTypes.TEXT
    },

    balance: {
        default: 0,
        type: DataTypes.INTEGER,
    },

    access_token: {
        type: DataTypes.TEXT,
    },


}
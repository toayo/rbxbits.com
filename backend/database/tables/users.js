import { DataTypes } from "sequelize";
import { sequelize } from "..";

export const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,

    avatarId: {
        default: null,
        type: DataTypes.STRING
    },

    balance: {
        default: 0,
        type: DataTypes.NUMBER,
    }
});
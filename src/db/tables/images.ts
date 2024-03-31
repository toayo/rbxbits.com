import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '..';

export const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }
});


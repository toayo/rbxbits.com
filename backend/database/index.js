import { Sequelize, DataTypes } from 'sequelize';

const {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
} = process.env

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql"
});


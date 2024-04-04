const { Sequelize, DataTypes } = require('sequelize');

const {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
} = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql"
});

class Database {
    async getUserByToken(token) {
        const data = await sequelize.query(`SELECT * FROM users WHERE access_token = ?`, [token])
        return data
    }
}

module.exports = new Database();
module.exports = {
    sequelize
}
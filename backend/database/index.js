const { Sequelize, QueryTypes } = require('sequelize');
const users = require('./tables/users');

const {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
} = process.env;

console.log(DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST)

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD || "", {
    host: DB_HOST,
    dialect: "mysql"
});

const Users = sequelize.define("Users", users)
Users.sync();

class Database {
    async getUserByToken(token) {
        try {
            const user = Users.findAll({
                where: {
                    access_token: token
                }
            })

            return user[0] || null;
        } catch (error) {
            console.error("Error fetching user by token:", error);
            throw error;
        }
    }
}

const db = new Database();
module.exports = {
    db,
    sequelize
};

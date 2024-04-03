import { Sequelize } from "sequelize";
import Secrets from "../config/secrets"
import test, { DatabaseTest } from "./test";

export const sequelize = new Sequelize({
    dialect: "mysql",
    ...Secrets.Mysql
});

class Database {
    test: DatabaseTest = test;
}

const DB = new Database();
export default DB;

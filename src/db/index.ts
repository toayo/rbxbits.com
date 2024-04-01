import { Sequelize } from "sequelize";
import Secrets from "../config/secrets"
import test from "./test";

export const sequelize = new Sequelize({
    dialect: "mysql",
    ...Secrets.Mysql
});

class Database {
    test: any;

    constructor() {
        this.test = test
    }

}

const DB = new Database();
export default DB;

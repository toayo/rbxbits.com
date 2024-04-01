'use server'

import { Sequelize } from "sequelize";
import test from "./test";
import Secrets from "../config/secrets"

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

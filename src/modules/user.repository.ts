import Sequelize = require('sequelize');
import { DBConfig } from "../db.config";
import { Component } from "@nestjs/common";

@Component()
export class UserRepository {
    
    private sequelize:Sequelize;

    constructor(private dbConfig:DBConfig) {
        this.sequelize = new Sequelize('test', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
        this.sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    async getUser(id: number) {
        const user = await this.sequelize.query("select * from demo where id = ?", { replacements: [id], type: Sequelize.QueryTypes.SELECT });
        return Promise.resolve(user);
    }

    async getUsers() {
        const users = await this.sequelize.query("select * from demo",{type:Sequelize.QueryTypes.SELECT});
        return Promise.resolve(users);
    }
}
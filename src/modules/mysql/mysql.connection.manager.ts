
import { Sequelize, Model } from 'sequelize-typescript';
import { Component } from "@nestjs/common";

@Component()
export class MysqlConnectionManager {

    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize({
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
            username: 'root',
            password: '123456',
            name: 'test',
            logging: true,//是否打印sql语句等日志
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

    addModels(models: Array<typeof Model>): void {
        this.sequelize.addModels(models);
    }
}
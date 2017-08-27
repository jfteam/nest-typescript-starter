import { Sequelize, Model } from 'sequelize-typescript';
import { DBConfig } from "../db.config";
import { Component } from "@nestjs/common";
import { Demo } from "./user.model";

@Component()
export class UserRepository {

    private sequelize;

    constructor() {
        this.sequelize = new Sequelize({
            host: 'localhost',
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
            this.sequelize.addModels([Demo]);
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    async getUser(id: number) {
        //const user = await this.sequelize.query("select * from demo where id = ?", { replacements: [id], type: Sequelize.QueryTypes.SELECT });
        return await Demo.findById(id);
    }

    async getUsers(): Promise<Demo[]> {
        //const users = await this.sequelize.query("select * from demo", { type: Sequelize.QueryTypes.SELECT });
        const users = await Demo.findAll({
            where: {
                id: {
                    gte: 500
                }
            }
        });
        return users;
    }

    async getAllUsers() {
        return await Demo.findAll();
    }

    async createUser(user: Demo) {
        const demo = await Demo.build<Demo>({ id: user.id, name: user.name, createdTime: new Date() });
        demo.save();
    }
}
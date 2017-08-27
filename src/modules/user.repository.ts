import { Sequelize, Model } from 'sequelize-typescript';
import { Component } from "@nestjs/common";
import { UserModel } from "./user.model";

@Component()
export class UserRepository {

    private sequelize;

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
            this.sequelize.addModels([UserModel]);
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    async getUser(id: number) {
        //const user = await this.sequelize.query("select * from demo where id = ?", { replacements: [id], type: Sequelize.QueryTypes.SELECT });
        return await UserModel.findById(id);
    }

    async getUsers(): Promise<Model<UserModel>[]> {
        //const users = await this.sequelize.query("select * from demo", { type: Sequelize.QueryTypes.SELECT });
        const users = await UserModel.findAll({
            where: {
                id: {
                    gte: 500
                }
            }
        });
        return users;
    }

    async getAllUsers() {
        return await UserModel.findAll();
    }

    async createUser(user: UserModel) {
        const demo = await UserModel.build<UserModel>({ id: user.id, name: user.name, createdTime: new Date() });
        demo.save();
    }
}
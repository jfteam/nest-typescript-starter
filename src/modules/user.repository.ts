import { Sequelize, Model } from 'sequelize-typescript';
import { Component } from "@nestjs/common";
import { UserModel } from "./user.model";
import { MysqlConnectionManager } from "./mysql/mysql.connection.manager";

@Component()
export class UserRepository {

    constructor(private connectionManager: MysqlConnectionManager) {
        this.connectionManager.addModels([UserModel]);
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
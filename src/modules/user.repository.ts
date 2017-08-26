import Sequelize = require('sequelize');
import { DBConfig } from "../db.config";

export class UserRepository {
    
    private sequelize:Sequelize;

    constructor(private dbConfig:DBConfig) {
        this.sequelize = new Sequelize(dbConfig.host, dbConfig.username, dbConfig.password, {
            host: dbConfig.database,
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

    getUser(id:number){
        this.sequelize.query("select * from demo where id= " + id, { type: Sequelize.QueryTypes.SELECT }).then((results)=>{
            Promise.resolve(results);
        })
    }

    async getUsers() {
        const users = await this.sequelize.query("select * from demo",{type:Sequelize.QueryTypes.SELECT});
        return Promise.resolve(users);
    }
}
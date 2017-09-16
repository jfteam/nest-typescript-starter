import { Model, Table, Column, CreatedAt } from "sequelize-typescript";

@Table({
    tableName: 'demo'
})
export class UserModel extends Model<UserModel>{
    @Column({
        primaryKey: true
    })
    id: number;

    @Column({
        field: 'name'
    })
    name: string;

    @Column({
        field: 'create_time'
    })
    createdTime:Date;
}
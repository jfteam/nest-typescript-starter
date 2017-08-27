import { Model, Table, Column, CreatedAt } from "sequelize-typescript";

@Table
export class Demo extends Model<Demo>{
    @Column({
        primaryKey: true
    })
    id: number;

    @Column
    name:string;

    @Column({
        field: 'create_time'
    })
    createdTime:Date;
}
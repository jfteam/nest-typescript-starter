

import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";
import { UserRepository } from "./domain/user.repository";
import { MysqlConnectionManager } from "../mysql/mysql.connection.manager";

@Module({
    controllers: [UserController],
    components: [UserService, UserRepository,MysqlConnectionManager],
    exports: [UserService]
})
export class UserModule {
    // configure(consumer: MiddlewaresConsumer) {
    //     consumer.apply(AuthMiddleware).forRoutes(UserController);
    // }
}
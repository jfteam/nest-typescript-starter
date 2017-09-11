import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthMiddleware } from "./auth.middle.ware";
import { UserGateway } from "./user.gateway";
import { UserRepository } from "./user.repository";
import { DBConfig } from "../db.config";
import { MysqlConnectionManager } from "./mysql/mysql.connection.manager";

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
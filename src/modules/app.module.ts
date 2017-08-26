import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './user.module';
import { AuthMiddleware } from "./auth.middle.ware";


@Module({
    modules: [UserModule]
})
export class ApplicationModule {
    //父模块中定义的中间件将在所有的子模块之前执行
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(
            {
                path: '*',
                method: RequestMethod.ALL
            }
        );
    }
}
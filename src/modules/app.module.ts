import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from "./auth.middle.ware";
import { UserModule } from "./user_module/user.module";


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

import { NestMiddleware, Middleware, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { HttpException } from "@nestjs/core";
import { Demo } from "./user.model";

@Middleware()
export class AuthMiddleware implements NestMiddleware {

    constructor(private userService: UserService) { }

    resolve(...args: any[]): (req?: any, res?: any, next?: any) => void {
        return async (req, res, next)=>{
            const token = req.headers["x-access-token"];
            const users:Demo[] = await this.userService.getUsers();
            users.forEach(function(item, index){
                console.log(JSON.stringify(item));
            });
            const user = await users.find((user) => user.name === token);
            console.log(JSON.stringify(user));
            if (!user) {
                throw new HttpException("(未授权)=>请求要求身份验证", HttpStatus.UNAUTHORIZED);
            }
            req.user = user;
            next();
        }
    }
}
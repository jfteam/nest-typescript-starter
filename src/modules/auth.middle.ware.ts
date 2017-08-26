
import { NestMiddleware, Middleware, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { HttpException } from "@nestjs/core";

@Middleware()
export class AuthMiddleware implements NestMiddleware {

    constructor(private userService: UserService) { }

    resolve(...args: any[]): (req?: any, res?: any, next?: any) => void {
        return async (req, res, next)=>{
            const token = req.headers["x-access-token"];
            const users = await this.userService.getUsers();
            const user = users.find((user) => user.name === token);
            if (!user) {
                throw new HttpException("(未授权)=>请求要求身份验证", HttpStatus.UNAUTHORIZED);
            }
            req.user = user;
            next();
        }
    }
}
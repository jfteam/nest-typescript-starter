
import { Controller, Post, Get, Param, Response, Request, Next, Body, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { Demo } from "./user.model";

@Controller("users")
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUsers( @Response() res) {
        const users = await this.userService.getUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get("/all")
    async getAllUsers(@Response() res){
        const users = await this.userService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get("/:id")
    async getUser( @Response() res, @Param("id") id) {
        const user = await this.userService.getUser(+id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    async createUser( @Request() req, @Response() res, @Body() user: Demo) {
        if (user != null) {
            console.log(user);
            const msg = await this.userService.createUser(user);
            return res.status(HttpStatus.CREATED).json(msg);
        }
        return res.status(HttpStatus.BAD_REQUEST).json('please input user info.');
    }
}
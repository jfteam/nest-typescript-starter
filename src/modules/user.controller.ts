
import { Controller, Post, Get, Param, Response, Request, Next, Body, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("users")
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    public async getUsers( @Response() res) {
        const users = this.userService.getUsers();
        users.then((users) => res.status(HttpStatus.OK).json(users));
    }

    @Get("/:id")
    getUser( @Response() res, @Param("id") id) {
        this.userService.getUser(+id).then((user) => res.status(HttpStatus.OK).json(user));
    }

    @Post()
    createUser( @Request() req, @Response() res, @Body("user") user) {
        this.userService.createUser(req.Body.user).then((msg) => res.status(HttpStatus.CREATED).join(msg));
    }
}
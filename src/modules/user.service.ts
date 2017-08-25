
import { Component } from "@nestjs/common";
import { HttpException } from "@nestjs/core";

@Component()
export class UserService {
    private users = [
        { id: 100, name: "zhangsan" },
        { id: 200, name: "lisi" },
        { id: 300, name: "wangwu" },
        { id: 400, name: "fengwp" }
    ];

    getUsers() {
        return Promise.resolve(this.users);
    }

    getUser(id: number) {
        const user = this.users.find((item) => item.id === id);
        if (!user) {
            throw new HttpException("User Not Found!", 404);
        }
        return Promise.resolve(user);
    }

    createUser(user) {
        this.users.push(user);
        return Promise.resolve();
    }
}

import { Component, HttpStatus, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { HttpException } from "@nestjs/core";
import { UserRepository } from "./user.repository";
import { Demo } from "./user.model";

@Component()
export class UserService implements OnModuleInit, OnModuleDestroy {

    constructor(private userRepository:UserRepository){}

    onModuleDestroy() {
        console.log('Module destroyed...');
    }
    onModuleInit() {
        console.log('Module initialized...'); 
    }
    private users = [
        { id: 100, name: "zhangsan" },
        { id: 200, name: "lisi" },
        { id: 300, name: "wangwu" },
        { id: 400, name: "fengwp" }
    ];

    async getUsers() {
        return Promise.resolve(this.userRepository.getUsers());
    }

    async getUser(id: number) {
        //const user = this.users.find((item) => item.id === id);
        const user = await this.userRepository.getUser(id);
        if (!user) {
            throw new HttpException("(未找到)=>服务器找不到请求的数据", HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.getAllUsers();
        return Promise.resolve(users);
    }

    createUser(user:Demo) {
        //this.users.push(user);
        this.userRepository.createUser(user);
        return Promise.resolve();
    }
}
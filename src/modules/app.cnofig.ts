import { Component } from "@nestjs/common";

@Component()
export class AppConfig{
    private static _host: string = "localhost:3306";
    private static _port: number = 3306;
    private static _username: string = "root";
    private static _password: string = "123456";
    private static _database: string = "demo";

    public static host(): string {
        return this._host;
    }

    public static port(): number {
        return this._port;
    }

    public static username(): string {
        return this._username;
    }

    public static password(): string {
        return this._password;
    }

    public static database(): string {
        return this._database;
    }
}
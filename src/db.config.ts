
export class DBConfig {
    private _host: string = "localhost:3306";
    private _username: string = "root";
    private _password: string = "123456";
    private _database: string = "demo";

    public get host(): string {
        return this._host;
    }
    public set host(v: string) {
        this._host = v;
    }
    public get username(): string {
        return this._username;
    }
    public set username(v: string) {
        this._username = v;
    }
    public get password(): string {
        return this._password;
    }
    public set database(v: string) {
        this._database = v;
    }
    public get database(): string {
        return this._database;
    }
}
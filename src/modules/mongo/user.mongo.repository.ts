import { MongoConnectionManager } from "./mongo.connection.manager";
import { IUser } from "./interfaces/User";
import { User, IUserModel } from "./models/User";

export class UserMongoRepository {

    constructor(private mongoConnectionManager: MongoConnectionManager) { }

    async findById(id: string): Promise<IUserModel> {
        const user = await User.findById(id);
        return user;
    }

    async save(user: IUser) {
        const u = new User(user);
        u.save();
    }

    async findList(): Promise<IUserModel[]> {
        const users = await User.find();
        return users;
    }

    async update(user: IUser): Promise<IUserModel> {
        const query = await User.update({ _id: user.email }, user);
        return query;
    }
}
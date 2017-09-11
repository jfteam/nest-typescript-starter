import * as mongoose from 'mongoose'
import { User } from './models/User'
import { Component } from "@nestjs/common";


@Component()
export class MongoConnectionManager {

    constructor() {
        mongoose.connect('mongodb://localhost:57017/test');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', async function () {
            console.log("we're connected!");
        });
    }
}
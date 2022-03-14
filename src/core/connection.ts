import mongoose from 'mongoose';
require("dotenv").config();

class Connection {
    private mongo_uri: string = process.env.URL_MONGODB_TEST || '';

    constructor() {
        this.mongoDb;
    }

    mongoDb() {
        mongoose.connect(this.mongo_uri, {
        })
        .then(db => console.log('Db is connect'))
        .catch(error => console.log('db is not connect'));
    }
}

const connection = new Connection();
connection.mongoDb();

export default Connection;
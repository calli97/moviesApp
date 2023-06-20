import { DataSource } from "typeorm";
import dotenv from "dotenv";
import User from "./entity/User";
import Movies from "./entity/Movies";
dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT ?? "3306"),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User, Movies],
    subscribers: [],
    migrations: [],
});

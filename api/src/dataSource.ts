import { DataSource } from "typeorm";
import dotenv from "dotenv";
import User from "./entity/User";
import Movie from "./entity/Movie";
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
    logging: false,
    entities: [User, Movie],
    subscribers: [],
    migrations: [],
});

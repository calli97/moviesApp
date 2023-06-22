"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("./entity/User"));
const Movie_1 = __importDefault(require("./entity/Movie"));
const Role_1 = __importDefault(require("./entity/Role"));
dotenv_1.default.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT !== null && DB_PORT !== void 0 ? DB_PORT : "3306"),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User_1.default, Movie_1.default, Role_1.default],
    subscribers: [],
    migrations: [],
});

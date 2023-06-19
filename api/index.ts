import app from "./src/app";
import dotenv from "dotenv";
import { AppDataSource } from "./src/dataSource";
dotenv.config();

const { PORT } = process.env;

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database Connected");

        app.listen(PORT);
        console.log(`Server running on port: ${PORT}`);
    } catch (error) {
        console.error(error);
    }
}

main();

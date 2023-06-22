import app from "./src/app";
import dotenv from "dotenv";
import { AppDataSource } from "./src/dataSource";
import { initializeRoles } from "./src/controllers/roleControllers";
dotenv.config();

const { PORT } = process.env;

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database Connected");

        app.listen(PORT);
        console.log(`Server running on port: ${PORT}`);
        await initializeRoles();
    } catch (error) {
        console.error(error);
    }
}

setTimeout(() => {
    main();
}, 60000);

import("reflect-metadata");

import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";
import error404 from "./middlewares/error404";
import errorLogger from "./middlewares/errorLogger";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(router);

app.use(error404, errorLogger, errorHandler);

export default app;

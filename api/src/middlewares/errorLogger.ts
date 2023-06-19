import { Request, Response, NextFunction } from "express";
import AppError from "../helpers/errors/AppError";

const errorLogger = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(err.stack);
    next(err);
};

export default errorLogger;

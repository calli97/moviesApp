import { Request, Response, NextFunction } from "express";
import AppError from "../helpers/errors/AppError";

const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.status;
    const message = err.message;
    return res.status(statusCode).json({
        code: statusCode,
        error: message,
    });
};

export default errorHandler;

import { NextFunction, Request, Response } from "express";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header;
    console.log(token);
    next();
};

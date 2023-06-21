import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../entity/User";
import InvalidTokenError from "../helpers/errors/InvalidTokenError";
import NoTokenProvidedError from "../helpers/errors/NoTokenProvidedError";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;

    try {
        if (token === undefined || token === null) {
            throw new NoTokenProvidedError();
        }
        const decoded = jwt.verify(token, "secret");
        const user = await User.findOneBy({
            email: (<any>decoded).email,
            userId: (<any>decoded).id,
        });
        if (user === null) {
            throw new InvalidTokenError();
        }
        next();
    } catch (error) {
        res.status(403).json({
            code: 403,
            error: (<Error>error).message,
        });
    }
};

import { Request, Response, NextFunction } from "express";
import NotFoundError from "../helpers/errors/NotFoundError";

const error404 = (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
};
export default error404;

import { Request, Response, NextFunction } from "express";

export const postMovie = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, releaseDate } = req.body;
    try {
        res.json({
            title,
            description,
            releaseDate,
        });
    } catch (error) {
        next(error);
    }
};

export const getMovies = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
        next(error);
    }
};

export const getMovie = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
        next(error);
    }
};

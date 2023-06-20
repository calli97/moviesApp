import { Request, Response, NextFunction } from "express";
import Movie from "../entity/Movie";
import NotFoundError from "../helpers/errors/NotFoundError";
import AlreadyExistError from "../helpers/errors/AlreadyExistError";
import { getRows, parseRow } from "../helpers/parser/csvParser";

export const postMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, description, releaseDate } = req.body;
    try {
        const verification = await Movie.findOneBy({
            title: title,
        });
        if (verification !== null) {
            throw new AlreadyExistError();
        }

        const movie = new Movie();
        movie.title = title;
        movie.description = description;
        movie.releaseDate = releaseDate;
        await movie.save();
        res.status(200).json(movie);
    } catch (error) {
        next(error);
    }
};

export const getMovies = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        next(error);
    }
};

export const getMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { movieid } = req.params;
    try {
        const movie = await Movie.findOneBy({
            movieId: parseInt(movieid),
        });
        if (movie === null) {
            throw new NotFoundError();
        }
        res.status(200).json(movie);
    } catch (error) {
        next(error);
    }
};

export const postMoviesFromFile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const csvContent = req.file?.buffer;
        const csvText = csvContent?.toString("utf-8") ?? "";
        const rows = getRows(csvText);
        const uploadedTitles = [];
        const rejectedTitles = [];
        for (let i = 0; i < rows.length; i++) {
            try {
                const movie = parseRow(rows[i]);

                await movie.save();
                uploadedTitles.push(movie);
            } catch (error) {
                rejectedTitles.push({
                    row: i,
                    reason: (error as Error).message,
                });
            }
        }
        res.status(200).json({
            uploadedTitles,
            rejectedTitles,
        });
    } catch (error) {
        next(error);
    }
};

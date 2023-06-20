import { Request, Response, NextFunction } from "express";
import Movie from "../entity/Movie";
import NotFoundError from "../helpers/errors/NotFoundError";
import AlreadyExistError from "../helpers/errors/AlreadyExistError";
import { csvParser } from "../helpers/parser/csvParser";

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
        csvParser(csvText);
        res.status(200).json({ msg: "aca irian archivos" });
    } catch (error) {
        next(error);
    }
};

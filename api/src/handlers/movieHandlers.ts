import { Request, Response, NextFunction } from "express";
import Movie from "../entity/Movie";
import NotFoundError from "../helpers/errors/NotFoundError";
import { getRows, parseRow } from "../helpers/parser/csvParser";
import {
    createMovie,
    deleteMovieById,
    getAllMovies,
    getMovieById,
    updateMovieById,
} from "../controllers/movieControllers";

export const postMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, description, releaseDate } = req.body;
    try {
        const movie = await createMovie(title, description, releaseDate);
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
        const movies = await getAllMovies();
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
    const id = parseInt(movieid);
    try {
        const movie = getMovieById(id);
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

export const deleteMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { movieid } = req.params;
    const id = parseInt(movieid);
    try {
        const removedMovie = await deleteMovieById(id);
        res.status(200).json(removedMovie);
    } catch (error) {
        next(error);
    }
};

export const updateMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { movieid } = req.params;
    const { title, description, releaseDate } = req.body;
    const id = parseInt(movieid);
    try {
        const updatedMovie = await updateMovieById(
            id,
            title,
            description,
            releaseDate
        );
        res.status(200).json(updatedMovie);
    } catch (error) {
        next(error);
    }
};

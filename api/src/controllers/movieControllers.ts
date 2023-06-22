import Movie from "../entity/Movie";
import AlreadyExistError from "../helpers/errors/AlreadyExistError";
import NotFoundError from "../helpers/errors/NotFoundError";

export const createMovie = async (
    title: string,
    description: string,
    releaseDate: number
) => {
    await verificateMovieExistence(title);
    const movie = new Movie();
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    await movie.save();
    return movie;
};

export const getAllMovies = async () => {
    const movies = await Movie.find();
    return movies;
};

export const getCountMovies = async (page: number) => {
    const perPage = 10;
    const skip = perPage * page - perPage;
    const movies = await Movie.find({
        take: perPage,
        skip,
    });
    const total = await Movie.count();

    return {
        movies,
        pagination: {
            total: total,
            pages: Math.ceil(total / perPage),
        },
    };
};

export const getMovieById = async (id: number) => {
    const movie = await Movie.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError();
    }
    return movie;
};

export const deleteMovieById = async (id: number) => {
    const movie = await Movie.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError();
    }
    const removedMovie = await Movie.remove(movie);
    return removedMovie;
};

export const updateMovieById = async (
    id: number,
    title: string,
    description: string,
    releaseDate: number
) => {
    const movie = await Movie.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError();
    }
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    await movie.save();
    return movie;
};

async function verificateMovieExistence(title: string) {
    const existingMovie = await Movie.findOneBy({
        title: title,
    });
    if (existingMovie !== null) {
        throw new AlreadyExistError();
    }
}

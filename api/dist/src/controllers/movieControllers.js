"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieById = exports.deleteMovieById = exports.getMovieById = exports.getMoviesByName = exports.getCountMovies = exports.getAllMovies = exports.createMovie = void 0;
const Movie_1 = __importDefault(require("../entity/Movie"));
const AlreadyExistError_1 = __importDefault(require("../helpers/errors/AlreadyExistError"));
const NotFoundError_1 = __importDefault(require("../helpers/errors/NotFoundError"));
const typeorm_1 = require("typeorm");
const createMovie = (title, description, releaseDate) => __awaiter(void 0, void 0, void 0, function* () {
    yield verificateMovieExistence(title);
    const movie = new Movie_1.default();
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    yield movie.save();
    return movie;
});
exports.createMovie = createMovie;
const getAllMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield Movie_1.default.find();
    return movies;
});
exports.getAllMovies = getAllMovies;
const getCountMovies = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const perPage = 10;
    const skip = perPage * page - perPage;
    const movies = yield Movie_1.default.find({
        take: perPage,
        skip,
    });
    const total = yield Movie_1.default.count();
    return {
        movies,
        pagination: {
            total: total,
            pages: Math.ceil(total / perPage),
        },
    };
});
exports.getCountMovies = getCountMovies;
const getMoviesByName = (page, title) => __awaiter(void 0, void 0, void 0, function* () {
    const perPage = 10;
    const skip = perPage * page - perPage;
    const movies = yield Movie_1.default.find({
        where: {
            title: (0, typeorm_1.Like)(`%${title}%`),
        },
        take: perPage,
        skip,
    });
    const total = yield Movie_1.default.count({
        where: {
            title: (0, typeorm_1.Like)(`%${title}%`),
        },
    });
    return {
        movies,
        pagination: {
            total: total,
            pages: Math.ceil(total / perPage),
        },
    };
});
exports.getMoviesByName = getMoviesByName;
const getMovieById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield Movie_1.default.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError_1.default();
    }
    return movie;
});
exports.getMovieById = getMovieById;
const deleteMovieById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield Movie_1.default.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError_1.default();
    }
    const removedMovie = yield Movie_1.default.remove(movie);
    return removedMovie;
});
exports.deleteMovieById = deleteMovieById;
const updateMovieById = (id, title, description, releaseDate) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield Movie_1.default.findOneBy({
        movieId: id,
    });
    if (movie === null) {
        throw new NotFoundError_1.default();
    }
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    yield movie.save();
    return movie;
});
exports.updateMovieById = updateMovieById;
function verificateMovieExistence(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingMovie = yield Movie_1.default.findOneBy({
            title: title,
        });
        if (existingMovie !== null) {
            throw new AlreadyExistError_1.default();
        }
    });
}

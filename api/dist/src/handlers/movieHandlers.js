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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovie = exports.deleteMovie = exports.postMoviesFromFile = exports.getMovie = exports.getMovies = exports.postMovie = void 0;
const csvParser_1 = require("../helpers/parser/csvParser");
const movieControllers_1 = require("../controllers/movieControllers");
const postMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, releaseDate } = req.body;
    try {
        const movie = yield (0, movieControllers_1.createMovie)(title, description, releaseDate);
        res.status(200).json(movie);
    }
    catch (error) {
        next(error);
    }
});
exports.postMovie = postMovie;
const getMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { page, title } = req.query;
    let pageIndex;
    let searchedTitle;
    if (page === undefined || page === null) {
        pageIndex = 1;
    }
    else {
        pageIndex = parseInt(page);
    }
    if (title === undefined || title === null) {
        searchedTitle = null;
    }
    else {
        searchedTitle = title.toString();
    }
    try {
        const movies = searchedTitle === null
            ? yield (0, movieControllers_1.getCountMovies)(pageIndex)
            : yield (0, movieControllers_1.getMoviesByName)(pageIndex, searchedTitle);
        res.status(200).json(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.getMovies = getMovies;
const getMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieid } = req.params;
    const id = parseInt(movieid);
    try {
        const movie = yield (0, movieControllers_1.getMovieById)(id);
        res.status(200).json(movie);
    }
    catch (error) {
        next(error);
    }
});
exports.getMovie = getMovie;
const postMoviesFromFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const csvContent = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer;
        const csvText = (_b = csvContent === null || csvContent === void 0 ? void 0 : csvContent.toString("utf-8")) !== null && _b !== void 0 ? _b : "";
        const rows = (0, csvParser_1.getRows)(csvText);
        const uploadedTitles = [];
        const rejectedTitles = [];
        for (let i = 0; i < rows.length; i++) {
            try {
                const movie = (0, csvParser_1.parseRow)(rows[i]);
                yield movie.save();
                uploadedTitles.push(movie);
            }
            catch (error) {
                rejectedTitles.push({
                    row: i,
                    reason: error.message,
                });
            }
        }
        res.status(200).json({
            uploadedTitles,
            rejectedTitles,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.postMoviesFromFile = postMoviesFromFile;
const deleteMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieid } = req.params;
    const id = parseInt(movieid);
    try {
        const removedMovie = yield (0, movieControllers_1.deleteMovieById)(id);
        res.status(200).json(removedMovie);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMovie = deleteMovie;
const updateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieid } = req.params;
    const { title, description, releaseDate } = req.body;
    const id = parseInt(movieid);
    try {
        const updatedMovie = yield (0, movieControllers_1.updateMovieById)(id, title, description, releaseDate);
        res.status(200).json(updatedMovie);
    }
    catch (error) {
        next(error);
    }
});
exports.updateMovie = updateMovie;

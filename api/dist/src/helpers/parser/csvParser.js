"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRow = exports.getRows = void 0;
const Movie_1 = __importDefault(require("../../entity/Movie"));
const InvalidFieldDataError_1 = __importDefault(require("../errors/InvalidFieldDataError"));
const InvalidFieldsAmountError_1 = __importDefault(require("../errors/InvalidFieldsAmountError"));
function getRows(csvText) {
    const rows = csvText.split("\n");
    return rows;
}
exports.getRows = getRows;
function parseRow(rowText) {
    const columns = rowText.split(";");
    if (![3, 4].includes(columns.length)) {
        throw new InvalidFieldsAmountError_1.default();
    }
    const movie = new Movie_1.default();
    movie.title = columns[0];
    movie.description = columns[1];
    if (!/^[0-9]+$/.test(columns[2])) {
        throw new InvalidFieldDataError_1.default();
    }
    movie.releaseDate = parseInt(columns[2]);
    return movie;
}
exports.parseRow = parseRow;

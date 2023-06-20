import Movie from "../../entity/Movie";
import InvalidFieldDataError from "../errors/InvalidFieldDataError";
import InvalidFieldsAmountError from "../errors/InvalidFieldsAmountError";

export function getRows(csvText: string) {
    const rows = csvText.split("\n");
    return rows;
}

export function parseRow(rowText: string) {
    const columns = rowText.split(";");

    if (![3, 4].includes(columns.length)) {
        throw new InvalidFieldsAmountError();
    }
    const movie = new Movie();
    movie.title = columns[0];
    movie.description = columns[1];
    if (!/^[0-9]+$/.test(columns[2])) {
        throw new InvalidFieldDataError();
    }
    movie.releaseDate = parseInt(columns[2]);
    return movie;
}

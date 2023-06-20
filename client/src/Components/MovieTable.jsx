import React from "react";

const MovieTable = ({ movies }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Título
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Descripción
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Año de estreno
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {movies.map((movie) => (
                    <tr key={movie.movieId}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {movie.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {movie.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {movie.releaseDate}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MovieTable;

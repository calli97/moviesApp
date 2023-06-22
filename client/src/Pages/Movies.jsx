import React, { useEffect, useState } from "react";
import MovieTable from "../Components/MovieTable";
import Pagination from "../Components/Pagination";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        getMovies();
    }, []);
    const getMovies = async () => {
        const response = await fetch("/api/movies");
        const data = await response.json();
        setMovies(data.movies);
        setTotalPages(data.pagination.pages);
    };

    const changePage = async (page) => {
        const response = await fetch(`/api/movies?page=${page}`);
        const data = await response.json();
        setMovies(data.movies);
        setTotalPages(data.pagination.pages);
    };
    return (
        <div>
            <h1>Movies</h1>
            <MovieTable movies={movies} />
            <Pagination totalPages={totalPages} handlePageChange={changePage} />
        </div>
    );
};

export default Movies;

import React, { useEffect, useState } from "react";
import MovieTable from "../Components/MovieTable";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/SearchBar";

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
    const handleSearch = async (title) => {
        const response = await fetch(`/api/movies?title=${title}`);
        const data = await response.json();
        setMovies(data.movies);
        setTotalPages(data.pagination.pages);
    };
    const handleShowAll = async (title) => {
        getMovies();
    };

    return (
        <div className="p-3">
            <h1 className="text-lg  font-semibold mb-3">Movies</h1>
            <SearchBar
                handleShowAll={handleShowAll}
                handleSearch={handleSearch}
            />
            <MovieTable movies={movies} />
            <Pagination totalPages={totalPages} handlePageChange={changePage} />
        </div>
    );
};

export default Movies;

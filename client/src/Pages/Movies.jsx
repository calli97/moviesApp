import React, { useEffect, useState } from "react";
import MovieTable from "../Components/MovieTable";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, []);
    const getMovies = async () => {
        const response = await fetch("/api/movies");
        const data = await response.json();
        setMovies(data);
    };
    return (
        <div>
            Movies
            <MovieTable movies={movies} />
        </div>
    );
};

export default Movies;

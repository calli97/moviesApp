import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const { movieid } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        const response = await fetch(`/api/movies/${movieid}`);
        const data = await response.json();
        setMovie(data);
    };
    const deleteHandler = async () => {
        const response = await fetch(`/api/movies/${movieid}`, {
            method: "DELETE",
        });
        const data = await response.json();
        if (response.status === 200) {
            navigate("/movies");
        }
    };
    const editHandler = async () => {
        navigate(`/edit/${movieid}`);
    };

    return (
        <div className="max-w-md mx-auto pt-10">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Movie Information
                    </h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                ID
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {movie.movieId}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Title
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {movie.title}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {movie.description}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Release Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {movie.releaseDate}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="flex flex-row justify-between bg-gray-50">
                    <div className="px-4 py-3 bg-gray-50  sm:px-6">
                        <button
                            onClick={editHandler}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Edit
                        </button>
                    </div>
                    <div className="px-4 py-3 bg-gray-50  sm:px-6">
                        <button
                            onClick={deleteHandler}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;

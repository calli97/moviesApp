import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieEdit = () => {
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
        setFormData(data);
    };

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        releaseDate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        const response = await fetch(`/api/movies/${movieid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.status === 200) {
            navigate("/movies");
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Movie</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Movie Information
                    </h3>
                </div>
                <div className="border-t border-gray-200">
                    <form
                        className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="col-span-3 sm:col-span-2">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-2">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-2">
                            <label
                                htmlFor="releaseDate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Release Date
                            </label>
                            <input
                                type="text"
                                id="releaseDate"
                                name="releaseDate"
                                value={formData.releaseDate}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                onClick={handleUpdate}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MovieEdit;

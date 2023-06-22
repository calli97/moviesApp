import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieFileForm = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        file: "",
    });
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(inputData.file);
        formData.append("csvFile", inputData.file);
        const response = await fetch("/api/movies/csv", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (response.status === 200) {
            navigate("/movies");
        }
    };

    const fileChangeHandler = (e) => {
        setInputData({
            file: e.target.files[0],
        });
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Form File</h2>
            <form onSubmit={submitHandler} className="space-y-4">
                <div>
                    <label
                        htmlFor="fileInput"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Select File
                    </label>
                    <input
                        type="file"
                        name="fileInput"
                        id="fileInput"
                        onChange={fileChangeHandler}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Upload File
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieFileForm;

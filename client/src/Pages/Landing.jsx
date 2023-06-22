import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="bg-slate-900 h-screen">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-8">
                    Welcome to My Movie App!
                </h1>
                <div className="flex space-x-4">
                    <Link
                        to="/movies"
                        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                    >
                        Go to Movies
                    </Link>
                    <Link
                        to="/auth"
                        className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900"
                    >
                        Go to Authentication
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;

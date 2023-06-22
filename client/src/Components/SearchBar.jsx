import React, { useState } from "react";

const SearchBar = ({ handleSearch, handleShowAll }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchTerm);
    };

    const handleShowAllClick = () => {
        handleShowAll();
    };

    return (
        <div className="flex items-center justify-between max-w-md mx-auto mt-6">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
            <button
                onClick={handleSearchClick}
                className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Search
            </button>
            <button
                onClick={handleShowAllClick}
                className="py-2 px-4 ml-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Reset
            </button>
        </div>
    );
};

export default SearchBar;

import React from "react";

const Pagination = ({ totalPages, handlePageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

    const handlePageClick = (page) => {
        handlePageChange(page);
    };

    return (
        <div className="flex items-center justify-center max-w-md mx-auto mt-6">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

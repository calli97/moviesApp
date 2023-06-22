import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const user = useSelector((state) => state.user);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-start">
                        <span className="text-white font-semibold text-lg">
                            Logo
                        </span>
                    </div>
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Landing
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/create"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Create
                        </NavLink>
                        {user.signIn ? (
                            <NavLink
                                to="/profile"
                                className="text-gray-300 hover:bg-grey-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium poin"
                            >
                                Profile
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/auth"
                                className="text-gray-300 hover:bg-grey-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium poin"
                            >
                                Sign in/Sign Up
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

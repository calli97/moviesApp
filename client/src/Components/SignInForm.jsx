import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/features/userSlice/userSlice";

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
        const response = await fetch("/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(formData),
        });
        const json = await response.json();
        if (response.status === 200) {
            localStorage.setItem("token", json.token);
            dispatch(signIn(json.token));
            navigate("/profile");
        }
        console.log(json);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="emailSignInInput"
                        className="block text-sm font-medium text-gray-400"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="emailSignInInput"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label
                        htmlFor="passwordSignInInput"
                        className="block text-sm font-medium text-gray-400"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="passwordSignInInput"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;

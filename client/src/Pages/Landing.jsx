import React from "react";
import SignupForm from "../Components/SignUpForm";
import SignInForm from "../Components/SignInForm";

const Landing = () => {
    return (
        <div className="bg-slate-900">
            Landing
            <SignupForm />
            <SignInForm />
        </div>
    );
};

export default Landing;

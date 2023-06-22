import React from "react";
import SignInForm from "../Components/SignInForm";
import SignupForm from "../Components/SignUpForm";

const Auth = () => {
    return (
        <div className=" bg-slate-900 p-4">
            <SignInForm />
            <div className="max-w-md mx-auto m-4">
                <h1 className="text-lg">Or if you don't have an account</h1>
            </div>
            <SignupForm />
        </div>
    );
};

export default Auth;

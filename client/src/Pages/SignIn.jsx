import React from "react";

function SignIn() {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="mt-3">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="emailInput">Email: </label>
                    <input type="text" name="email" id="emailInput" />
                </div>
                <div>
                    <label htmlFor="passwordInput">Password: </label>
                    <input type="text" name="password" id="passwordInput" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;

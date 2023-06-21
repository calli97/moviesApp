import React from "react";

function SignUp() {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="mt-3">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="nameInput">First name: </label>
                    <input type="text" name="fisrtname" id="nameInput" />
                </div>
                <div>
                    <label htmlFor="lastnameInput">Last name: </label>
                    <input type="text" name="lastname" id="lastnameInput" />
                </div>
                <div>
                    <label htmlFor="emailInput">Email: </label>
                    <input type="text" name="email" id="emailInput" />
                </div>
                <div>
                    <label htmlFor="passwordInput">Password: </label>
                    <input type="text" name="password" id="passwordInput" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;

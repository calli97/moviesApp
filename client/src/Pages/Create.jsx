import React, { useState } from "react";

const Create = () => {
    const [inputData, setInputData] = useState({
        file: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
    };

    const fileChangeHandler = (e) => {
        setInputData({
            file: e.target.files[0],
        });
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="file" onChange={fileChangeHandler} />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;

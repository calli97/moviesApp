import React, { useState } from "react";
import MovieForm from "../Components/MovieForm";
import MovieFileForm from "../Components/MovieFileForm";

const Create = () => {
    return (
        <div>
            <MovieForm />
            <MovieFileForm />
        </div>
    );
};

export default Create;

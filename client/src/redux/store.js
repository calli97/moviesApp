import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice/userSlice";

const store = configureStore({
    reducer: {
        cards: userReducer,
    },
});

export default store;

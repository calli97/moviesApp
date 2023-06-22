import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialState = {
    signIn: false,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        token: "",
        id: null,
        role: "",
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        checkLogInUser: (state, action) => {
            try {
                const user = jwt_decode(action.payload);
                state.signIn = true;
                state.user = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role.name,
                    token: action.payload,
                };
            } catch (error) {
                state.signIn = false;
            }
        },
        signIn: (state, action) => {
            try {
                const user = jwt_decode(action.payload);
                state.signIn = true;
                state.user = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role.name,
                    token: action.payload,
                };
            } catch (error) {
                state.signIn = false;
            }
        },
        signOut: (state, action) => {
            state.signIn = false;
            state.user = {
                firstName: "",
                lastName: "",
                email: "",
                token: "",
                id: null,
                role: "",
            };
        },
    },
    extraReducers: {},
});

export const { checkLogInUser, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;

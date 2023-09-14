import { createReducer } from "@reduxjs/toolkit";

import { signup, login, autenticate, logoutAction } from "../Action/UserAction.js";


const initialState = {
    user : {},
    token: null,
    status: 'offline'
};

const userReducer = createReducer(initialState,
    (builder) => builder
    .addCase(login, (state, action) => {

        const newState = { ...state, ...action.payload}
        return newState
    })
    .addCase(signup, (state, action) => {

        const newState = { ...state, ...action.payload}
        return newState
    })
    .addCase(autenticate.fulfilled, (state, action) => {

        const newState = { ...state}
        return newState
    })
    .addCase(logoutAction, (state, action) => {

        const newState = { ...state, ...action.payload}
        return newState
    })
)

export default userReducer
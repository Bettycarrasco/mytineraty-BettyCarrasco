import { configureStore } from "@reduxjs/toolkit";
import {readAllCitiesReducer} from "./Reducers/CitiesReducers.js";
import userReducer from "./Reducers/UserReducers.js";

const store = configureStore({
    reducer: {
        readAllCitiesReducer,
        userReducer
    }
})

export default store
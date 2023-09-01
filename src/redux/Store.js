import { configureStore } from "@reduxjs/toolkit";
import readAllCitiesReducer from "./Reducers/CitiesReducers.js";

const store = configureStore({
    reducer: {
        readAllCitiesReducer 
    }
})

export default store
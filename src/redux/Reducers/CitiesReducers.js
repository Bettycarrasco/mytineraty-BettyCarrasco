import { createReducer } from "@reduxjs/toolkit";
import { readAllCities } from "../Action/CitiesAction.js";


const initialState = {
    cities : [],
};

const readAllCitiesReducer = createReducer(initialState, (builder) => 
    builder
        .addCase(readAllCities.fulfilled, (store,action)=>{
            const newStore = {...store, cities: action.payload}
            
            return newStore
        })
        .addCase(readAllCities.rejected, (store,action)=>{
            const newStore = {...store, cities: action.payload}
            return newStore
        })
);

export default readAllCitiesReducer
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../../service/Service.js";
import axios from "axios";


export const readAllCities = createAsyncThunk('readAllCities', async () => {
    try {
        const cities = await axios.get('http://localhost:7000/cities')
        return cities.data
    } catch (error) {
        console.log(error);
        return []
    }
})

export const filterCities = createAction('filterCities',  (search) => {
    return {
        payload: search
    }
})
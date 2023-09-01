import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../../service/Service.js";

export const readAllCities = createAsyncThunk('readAllCities', async ()=>{
    const res = await fetchData();
    //console.log(res);
    return res 
})
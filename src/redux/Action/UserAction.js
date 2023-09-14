import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


const login = createAction('login', (credentials) =>{
    const reducerData = {
        user: credentials.user,
        token: credentials.token,
        status: "online"
    }

    return {
        payload: reducerData
    }

})

const signup = createAction('signup', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: "online"
    }
    return {
        payload: reducerData
    }

})

const autenticate = createAsyncThunk('autenticate', () => {

    return {
        payload: 'algo'
    }

    
})

const logoutAction = createAction('logoutAction', () =>{
    const reducerData = {
        user: {},
        token: "",
        status: "offline"
    }

    return {
        payload: reducerData
    }

})
export { login, signup, autenticate, logoutAction }
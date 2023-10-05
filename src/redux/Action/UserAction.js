import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
//import { server} from './../../service/Lst';
import { Lst } from "./../../service/Lst";


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

const autenticate = createAsyncThunk('autenticate', async () => {
    
    const token = Lst.get('token')
    const {data} = await server.get('/user/token', {
        headers: {
            Authorization: "Bearer " + token,
        }
    })
    
    const reducerData = {
        user: data.userData,
        //token: data.token,
        status: "online"
    }
    
    console.log(reducerData);
    console.log(data);

    return {
        payload: 'algo'
    }

    
})

const logout = createAction('logout');

const logoutAction = createAction('logoutAction', () =>{
    const reducerData = {
        user: {},
        token: "",
        status: "offline"
    }

    Lst.set('token', '')
    return {
        payload: reducerData
    }

})
export { login, signup, autenticate, logoutAction, logout }
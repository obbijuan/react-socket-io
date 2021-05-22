import React, { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState(initialState)

    const login = async(email, password) => {

        const resp = await fetchWithoutToken('login', { email, password }, 'POST');
        console.log(resp)
    }

    const register = (nombre, email, password) => {

    }

    const verifyToken = useCallback(() => {

    },[])

    const logout = () => {

    }


    return (
        <AuthContext.Provider value={{
            login,
            register,
            verifyToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

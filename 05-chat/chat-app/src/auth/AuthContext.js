import React, { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

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
        
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

        }

        return resp.ok;
    }

    const register = async(nombre, email, password) => {

        const resp = await fetchWithoutToken('login/new', { nombre, email, password }, 'POST');

        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            return true;
        }

        return resp.msg;
    }

    const verifyToken = useCallback(() => {

    },[])

    const logout = () => {

    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

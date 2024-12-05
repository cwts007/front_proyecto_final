import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import config from '../config';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`${config.backendUrl}/api/auth/login`, { email, password });
            setUser({ email }); // Almacenar usuario (puedes extenderlo según la respuesta)
            localStorage.setItem('authToken', data.token); // Guardar token
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
        }
    };

    const register = async (name, email, password) => {
        try {
            const { data } = await axios.post(`${config.backendUrl}/api/auth/register`, { name, email, password });
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al registrarse');
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, register }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}

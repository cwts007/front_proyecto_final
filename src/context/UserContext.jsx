import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    // Función para iniciar sesión
    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`${config.backendUrl}/api/auth/login`, { email, password });
            setUser({ email }); // Establece el estado del usuario (puedes extenderlo según la respuesta)
            localStorage.setItem('authToken', data.token); // Guarda el token
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
        }
    };

    // Función para registrarse
    const register = async (name, email, password) => {
        try {

            console.log(config.backendUrl);

            const { data } = await axios.post(`${config.backendUrl}/api/auth/register`, { name, email, password });
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al registrarse');
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('authToken'); // Elimina el token
        setUser(null); // Restablece el estado del usuario
    };

    // Función para cargar el usuario autenticado
    const loadUser = async () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const { data } = await axios.get(`${config.backendUrl}/api/auth/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(data); // Establece el estado con los datos del usuario
            } catch (error) {
                console.error('Error al cargar el usuario:', error);
                logout(); // Cierra sesión si hay error
            }
        }
    };

    // Cargar el usuario al montar el contexto
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, login, register, logout, loadUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}

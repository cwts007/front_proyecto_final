// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes añadir la lógica para enviar los datos de inicio de sesión al backend
        onLogin({ email, password }); // Puedes manejar esta función en el componente padre
    };

    return (
        <div>
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { apiClient } from '../config'; // Asegúrate de que `axios` esté configurado correctamente con la URL base del backend.

function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtener el token almacenado en localStorage
        const token = localStorage.getItem('authToken');

        // Realizar la solicitud al backend
        apiClient.get('/api/auth/profile', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setProfile(response.data); // Guardar los datos del perfil
                setLoading(false);
            })
            .catch((error) => {
                setError('No se pudo cargar el perfil. Intenta de nuevo más tarde.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando perfil...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Mi Perfil</h1>
            {profile && (
                <div>
                    <p><strong>Nombre:</strong> {profile.name}</p>
                    <p><strong>Correo:</strong> {profile.email}</p>
                    <p><strong>Fecha de registro:</strong> {new Date(profile.created_at).toLocaleDateString()}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;

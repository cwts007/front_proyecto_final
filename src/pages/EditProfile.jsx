// src/pages/EditProfile.jsx
import React from 'react';

function EditProfile() {
    return (
        <div>
            <h1>Edición de Datos Personales</h1>
            <form>
                <label>Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>Email:
                    <input type="email" name="email" />
                </label>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
}

export default EditProfile;

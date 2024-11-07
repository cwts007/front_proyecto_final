// src/pages/CreateProduct.jsx
import React from 'react';

function CreateProduct() {
    return (
        <div>
            <h1>Crear Producto</h1>
            <form>
                <label>Nombre del producto:
                    <input type="text" name="nombre" required />
                </label>
                <label>Descripción:
                    <textarea name="descripcion" required></textarea>
                </label>
                <label>Precio:
                    <input type="number" name="precio" required />
                </label>
                <button type="submit">Crear Producto</button>
            </form>
        </div>
    );
}

export default CreateProduct;

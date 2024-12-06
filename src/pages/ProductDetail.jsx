import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el ID de la URL
import { Card, Button, message } from "antd";
import apiClient from "../config"; // Axios configurado con interceptores

function ProductDetail() {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await apiClient.get(`/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                message.error("Error al cargar el producto.");
                console.error("Error al obtener producto:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            const response = await apiClient.post("/api/cart", {
                productId: product.id,
                quantity: 1,
            });

            if (response.status === 201) {
                message.success(`${product.name} agregado al carrito.`);
            } else {
                throw new Error("Error al agregar el producto al carrito.");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                message.error("No estás autenticado. Por favor, inicia sesión.");
            } else {
                message.error("Hubo un problema al agregar el producto al carrito.");
            }
            console.error("Error:", error);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <Card
                title={`${product.name} - ${product.code}`}
                style={{ maxWidth: "600px", margin: "0 auto" }}
                cover={
                    <img
                        alt={product.name}
                        src={product.imageUrl || "/r1.png"}
                        style={{ height: "300px", objectFit: "cover" }}
                    />
                }
            >
                <p><strong>Precio:</strong> ${product.price}</p>
                <p><strong>Marca:</strong> {product.brand}</p>
                <p><strong>Tipo:</strong> {product.type}</p>
                <p><strong>Descripción:</strong> {product.description}</p>
                <Button type="primary" block onClick={handleAddToCart}>
                    Agregar al Carrito
                </Button>
            </Card>
        </div>
    );
}

export default ProductDetail;

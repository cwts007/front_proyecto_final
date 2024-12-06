import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, message } from "antd";
import { apiClient } from "../config";

function ProductDetail({ onAddToCart }) {
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

    const handleAddToCart = () => {
        if (product) {
            onAddToCart(product); // Pasar el producto al carrito
            message.success(`${product.name} agregado al carrito.`);
        } else {
            message.error("No se pudo agregar el producto al carrito.");
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

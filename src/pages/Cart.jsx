import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Button, InputNumber, message } from 'antd';
import axios from 'axios';
import config from '../config';

const { Text, Title } = Typography;

function Cart() {
    const [items, setItems] = useState([]); // Inicializar como array vacío
    const [loading, setLoading] = useState(true);

    // Obtener el carrito desde el backend
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const { data } = await axios.get(`${config.backendUrl}/api/cart`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // Validar que data sea un array
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    console.error('Formato inesperado de datos:', data);
                    message.error('Error en los datos del carrito.');
                }
            } catch (error) {
                console.error('Error al cargar el carrito:', error);
                message.error('Error al cargar el carrito');
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    // Cambiar cantidad de un producto
    const handleQuantityChange = async (itemId, quantity) => {
        if (quantity <= 0) return;

        try {
            const token = localStorage.getItem('authToken');
            await axios.put(
                `${config.backendUrl}/api/cart/${itemId}`,
                { quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === itemId ? { ...item, quantity } : item
                )
            );

            message.success('Cantidad actualizada');
        } catch (error) {
            console.error('Error al actualizar la cantidad:', error);
            message.error('Error al actualizar la cantidad');
        }
    };

    // Eliminar un producto del carrito
    const handleRemove = async (itemId) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`${config.backendUrl}/api/cart/${itemId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
            message.success('Producto eliminado del carrito');
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            message.error('Error al eliminar el producto');
        }
    };

    // Calcular el total
    const calculateTotal = () => {
        if (!Array.isArray(items)) return 0; // Validar que items sea un array
        return items.reduce((total, item) => total + item.quantity * item.product.price, 0);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Carro de Compras</Title>
            <List
                itemLayout="horizontal"
                dataSource={items}
                loading={loading}
                renderItem={(item) => (
                    <Card style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <Text strong>{item.product.name}</Text>
                                <p>Precio: ${item.product.price}</p>
                                <p>Total: ${item.quantity * item.product.price}</p>
                            </div>
                            <div>
                                <InputNumber
                                    min={1}
                                    value={item.quantity}
                                    onChange={(value) => handleQuantityChange(item.id, value)}
                                />
                                <Button
                                    type="link"
                                    danger
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Eliminar
                                </Button>
                            </div>
                        </div>
                    </Card>
                )}
            />
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Title level={3}>Total: ${calculateTotal()}</Title>
                <Button type="primary">Proceder al Pago</Button>
            </div>
        </div>
    );
}

export default Cart;

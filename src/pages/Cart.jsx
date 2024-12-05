import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Button, message } from 'antd';
import axios from 'axios';
import config from '../config';
import CartItem from '../components/CartItem';

const { Text, Title } = Typography;

function Cart() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const { data } = await axios.get(`${config.backendUrl}/api/cart`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setItems(data);
            } catch (error) {
                message.error('Error al cargar el carrito');
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Carro de Compras</Title>
            <List
                itemLayout="horizontal"
                dataSource={items}
                loading={loading}
                renderItem={(item) => (
                    <CartItem
                        item={item}
                        onQuantityChange={(value) => console.log('Cambio de cantidad', value)}
                        onRemove={() => console.log('Eliminar producto')}
                    />
                )}
            />
        </div>
    );
}

export default Cart;

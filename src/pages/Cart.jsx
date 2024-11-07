// src/pages/Cart.jsx
import React, { useState } from 'react';
import { List, Card, Typography, Button } from 'antd';
import CartItem from '../components/CartItem'; // Importamos CartItem

const { Text, Title } = Typography;

function Cart() {
    const [items, setItems] = useState([
        { id: 1, name: 'Producto 1', price: 100, quantity: 1 },
        { id: 2, name: 'Producto 2', price: 150, quantity: 1 },
        { id: 3, name: 'Producto 3', price: 200, quantity: 1 }
    ]);

    const handleQuantityChange = (value, itemId) => {
        setItems(items.map(item =>
            item.id === itemId ? { ...item, quantity: value } : item
        ));
    };

    const handleRemove = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Carro de Compras</Title>
            <List
                itemLayout="horizontal"
                dataSource={items}
                renderItem={item => (
                    <CartItem
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />
                )}
            />
            <Card style={{ marginTop: '20px', textAlign: 'right' }}>
                <Text strong style={{ fontSize: '18px' }}>Total: ${total}</Text>
                <div style={{ marginTop: '10px' }}>
                    <Button type="primary" style={{ width: '100%' }}>Proceder al Pago</Button>
                </div>
            </Card>
        </div>
    );
}

export default Cart;

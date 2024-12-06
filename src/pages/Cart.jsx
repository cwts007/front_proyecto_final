import React from 'react';
import { List, Card, Typography, Button, InputNumber, Empty } from 'antd';

const { Text, Title } = Typography;

function Cart({ cartItems, onUpdateCart, onRemoveFromCart }) {
    // Calcular el total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Carro de Compras</Title>
            {cartItems.length > 0 ? (
                <List
                    itemLayout="horizontal"
                    dataSource={cartItems}
                    renderItem={(item) => (
                        <Card style={{ marginBottom: '10px', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <Text strong>{item.product.name}</Text>
                                    <p>{item.product.description}</p>
                                    <p>Precio: ${item.product.price}</p>
                                    <p>Total: ${item.quantity * item.product.price}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img
                                        src={item.product.imageUrl.startsWith("/")
                                            ? item.product.imageUrl // Usar ruta directa desde `public`
                                            : `${item.product.imageUrl}`}
                                        alt={item.product.name}
                                        style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                    <div>
                                        <InputNumber
                                            min={1}
                                            value={item.quantity}
                                            onChange={(value) => onUpdateCart(item.product.id, value)}
                                        />
                                        <Button
                                            type="link"
                                            danger
                                            onClick={() => onRemoveFromCart(item.product.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )}
                />
            ) : (
                <Empty description="Tu carrito está vacío" style={{ marginTop: '50px' }} />
            )}
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Title level={3}>Total: ${calculateTotal()}</Title>
                <Button type="primary" disabled={cartItems.length === 0}>
                    Proceder al Pago
                </Button>
            </div>
        </div>
    );
}

export default Cart;

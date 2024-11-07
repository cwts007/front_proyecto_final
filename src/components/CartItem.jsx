// src/components/CartItem.jsx
import React from 'react';
import { List, Button, InputNumber, Typography } from 'antd';

const { Text } = Typography;

function CartItem({ item, onQuantityChange, onRemove }) {
    return (
        <List.Item
            actions={[
                <InputNumber
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(value) => onQuantityChange(value, item.id)}
                />,
                <Button type="link" onClick={() => onRemove(item.id)}>Eliminar</Button>
            ]}
        >
            <List.Item.Meta
                title={<Text strong>{item.name}</Text>}
                description={`Precio: $${item.price}`}
            />
            <Text>Total: ${item.price * item.quantity}</Text>
        </List.Item>
    );
}

export default CartItem;

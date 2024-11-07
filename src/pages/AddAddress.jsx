// src/pages/AddAddress.jsx
import React from 'react';
import { Form, Input, Button, Card } from 'antd';

function AddAddress() {
  const onFinish = (values) => {
    console.log('Formulario enviado:', values);
    // Aquí se puede agregar lógica para enviar los datos a una API
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Agregar Dirección" style={{ width: 400 }}>
        <Form
          name="add_address"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Dirección"
            name="direccion"
            rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
          >
            <Input placeholder="Ingresa tu dirección" />
          </Form.Item>

          <Form.Item
            label="Ciudad"
            name="ciudad"
            rules={[{ required: true, message: 'Por favor ingresa la ciudad' }]}
          >
            <Input placeholder="Ingresa tu ciudad" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Agregar Dirección
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddAddress;

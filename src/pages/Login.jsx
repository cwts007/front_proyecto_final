import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useUser } from '../context/UserContext';

function Login() {
  const { login } = useUser();

  const onFinish = async (values) => {
    try {
      await login(values.email, values.password);
      message.success('Inicio de sesión exitoso');
      // Redirecciona a otra página si es necesario
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Iniciar Sesión" style={{ width: 300 }}>
        <Form name="login" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;

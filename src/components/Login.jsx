// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { Form, Input, Button, message, Row, Col, Card } from 'antd';

const Login = ({ onLogin, toggle }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(`${config.API_URL}/api/usuarios/login`, {
                correo: values.email,
                password: values.password,
            });
            message.success("Inicio de sesión exitoso");
            onLogin(response.data);
        } catch (error) {
            message.error(error.response?.data?.error || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={24} sm={16} md={12} lg={8}>
                <Card
                    title="Inicio de Sesión"
                    bordered={true}
                    style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}
                >
                    <Form
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Por favor ingresa tu email' },
                                { type: 'email', message: 'Ingresa un email válido' }
                            ]}
                        >
                            <Input placeholder="Ingresa tu email" />
                        </Form.Item>

                        <Form.Item
                            label="Contraseña"
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
                        >
                            <Input.Password placeholder="Ingresa tu contraseña" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>
                                Iniciar Sesión
                            </Button>
                        </Form.Item>
                        <p style={{ textAlign: 'center' }}>
                            ¿No tienes cuenta?{' '}
                            <Button type="link" onClick={toggle}>
                                Regístrate aquí
                            </Button>
                        </p>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;

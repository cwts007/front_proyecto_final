// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { Form, Input, Button, Select, message, Row, Col, Card } from 'antd';

const { Option } = Select;

const Register = ({ onRegister, toggle }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(`${config.API_URL}/api/usuarios/register`, {
                nombre: values.name,
                apellido: values.apellido,
                rut: values.rut,
                correo: values.email,
                password: values.password,
                tipo: values.tipo,
            });
            message.success("Usuario registrado correctamente");
            form.resetFields();
            onRegister(response.data);
        } catch (error) {
            message.error(error.response?.data?.error || 'Error al registrar usuario');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={24} sm={16} md={12} lg={8}>
                <Card
                    title="Registro de Usuario"
                    bordered={true}
                    style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        initialValues={{ tipo: 'Cliente' }}
                    >
                        <Form.Item
                            label="Nombre"
                            name="name"
                            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                        >
                            <Input placeholder="Ingresa tu nombre" />
                        </Form.Item>

                        <Form.Item
                            label="Apellido"
                            name="apellido"
                            rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
                        >
                            <Input placeholder="Ingresa tu apellido" />
                        </Form.Item>

                        <Form.Item
                            label="RUT"
                            name="rut"
                            rules={[{ required: true, message: 'Por favor ingresa tu RUT' }]}
                        >
                            <Input placeholder="Ingresa tu RUT" />
                        </Form.Item>

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
                            rules={[{ required: true, message: 'Por favor ingresa una contraseña' }]}
                        >
                            <Input.Password placeholder="Crea una contraseña" />
                        </Form.Item>

                        <Form.Item
                            label="Confirmar Contraseña"
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Por favor confirma tu contraseña' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Las contraseñas no coinciden'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Repite la contraseña" />
                        </Form.Item>

                        <Form.Item
                            label="Tipo de Usuario"
                            name="tipo"
                            rules={[{ required: true, message: 'Por favor selecciona el tipo de usuario' }]}
                        >
                            <Select>
                                <Option value="Cliente">Cliente</Option>
                                <Option value="Tecnico">Técnico</Option>
                                <Option value="Fabricante">Fabricante</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>
                                Registrarse
                            </Button>
                        </Form.Item>
                        <p style={{ textAlign: 'center' }}>
                            ¿Ya tienes cuenta?{' '}
                            <Button type="link" onClick={toggle}>
                                Inicia Sesión aquí
                            </Button>
                        </p>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Register;

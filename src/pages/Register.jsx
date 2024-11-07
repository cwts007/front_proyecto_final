// src/pages/Register.jsx
import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';

function Register() {
    const onFinish = (values) => {
        message.success('Formulario de registro enviado con éxito');
        console.log('Valores enviados:', values);
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Error en el formulario de registro');
        console.log('Errores:', errorInfo);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Registro de Usuario" style={{ width: 300 }}>
                <Form
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nombre"
                        name="name"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Correo"
                        name="email"
                        rules={[
                            { required: true, message: 'Por favor ingresa tu correo' },
                            { type: 'email', message: 'Introduce un correo válido' },
                        ]}
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

                    <Form.Item
                        label="Confirmar Contraseña"
                        name="confirm"
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
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Registrarse
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Register;

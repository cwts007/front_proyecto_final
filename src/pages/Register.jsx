import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useUser } from '../context/UserContext';

function Register() {
    const { register } = useUser();

    const onFinish = async (values) => {
        try {
            await register(values.name, values.email, values.password);
            message.success('Registro exitoso');
            // Redirecciona a otra página si es necesario
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Registro de Usuario" style={{ width: 300 }}>
                <Form name="register" onFinish={onFinish} autoComplete="off">
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

// src/pages/EditAddress.jsx
import React, { useState } from 'react';
import { List, Card, Form, Input, Button, Modal, message } from 'antd';

function EditAddress() {
    const [addresses, setAddresses] = useState([
        { id: 1, direccion: '123 Calle Falsa', ciudad: 'Ciudad Ficticia' },
        { id: 2, direccion: '456 Avenida Verdadera', ciudad: 'Ciudad Real' }
    ]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentAddress, setCurrentAddress] = useState(null);

    const showEditModal = (address) => {
        setCurrentAddress(address);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCurrentAddress(null);
    };

    const handleFinish = (values) => {
        const updatedAddresses = addresses.map(addr =>
            addr.id === currentAddress.id ? { ...addr, ...values } : addr
        );
        setAddresses(updatedAddresses);
        setIsModalVisible(false);
        message.success('Dirección actualizada con éxito');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edición de Direcciones</h1>
            <p>Aquí puedes editar tus direcciones:</p>

            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={addresses}
                renderItem={address => (
                    <List.Item>
                        <Card
                            title={address.direccion}
                            extra={<Button type="link" onClick={() => showEditModal(address)}>Editar</Button>}
                        >
                            <p>Ciudad: {address.ciudad}</p>
                        </Card>
                    </List.Item>
                )}
            />

            <Modal
                title="Editar Dirección"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    initialValues={currentAddress}
                    onFinish={handleFinish}
                >
                    <Form.Item
                        label="Dirección"
                        name="direccion"
                        rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Ciudad"
                        name="ciudad"
                        rules={[{ required: true, message: 'Por favor ingresa la ciudad' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Guardar Cambios
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default EditAddress;

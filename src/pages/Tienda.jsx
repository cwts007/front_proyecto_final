// src/pages/Tienda.jsx
import React, { useState } from 'react';
import { Card, Row, Col, Button, Input, Select, Space } from 'antd';
import { useMediaQuery } from 'react-responsive';

// Componentes de Ant Design para búsqueda y selección
const { Search } = Input;
const { Option } = Select;

// Array con los datos de los productos, que incluye código, nombre, marca, tipo, precio, descripción e imagen
const products = [
    { id: 1, code: 'P001', name: 'Motor', brand: 'Marca A', type: 'Electrónico', price: '$50.00', description: 'Motor eléctrico de alta eficiencia', imageUrl: '/r1.png' },
    { id: 2, code: 'P002', name: 'Tarjeta Electrónica', brand: 'Marca B', type: 'Electrónico', price: '$75.00', description: 'Tarjeta de control para maquinaria', imageUrl: '/r2.png' },
    { id: 3, code: 'P003', name: 'Resistencia Calefactora', brand: 'Marca A', type: 'Resistencia', price: '$60.00', description: 'Resistencia para hornos industriales', imageUrl: '/r3.png' },
    { id: 4, code: 'P004', name: 'Engranaje', brand: 'Marca C', type: 'Mecánico', price: '$85.00', description: 'Engranaje de precisión para maquinaria', imageUrl: '/r4.png' },
];

function Tienda() {
    // Estado para el término de búsqueda, marca seleccionada y tipo seleccionado
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    // Usamos una consulta de medios para verificar si la pantalla tiene un ancho menor a 768px (es decir, es móvil)
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Filtra los productos según el término de búsqueda, la marca y el tipo seleccionados
    const filteredProducts = products.filter((product) => {
        // Verifica si el término de búsqueda coincide con el nombre o el código del producto
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.code.toLowerCase().includes(searchTerm.toLowerCase());

        // Verifica si la marca seleccionada coincide con la marca del producto
        const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;

        // Verifica si el tipo seleccionado coincide con el tipo del producto
        const matchesType = selectedType ? product.type === selectedType : true;

        // Solo incluye productos que coincidan con todos los criterios
        return matchesSearch && matchesBrand && matchesType;
    });

    // Función para limpiar todos los filtros
    const clearFilters = () => {
        setSearchTerm('');
        setSelectedBrand(null);
        setSelectedType(null);
    };

    return (
        <div style={{ padding: isMobile ? '10px' : '20px' }}>
            {/* Título y subtítulo de la página */}
            <h1 style={{ textAlign: 'center', marginBottom: isMobile ? '10px' : '20px' }}>Tienda</h1>
            <p style={{ textAlign: 'center', marginBottom: isMobile ? '10px' : '20px' }}>Explora nuestros productos</p>

            {/* Barra de búsqueda y filtros */}
            <Space
                direction={isMobile ? 'vertical' : 'horizontal'}
                style={{
                    marginBottom: '20px',
                    width: '100%',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: isMobile ? 'center' : 'start',
                }}
                wrap={true}
            >
                {/* Campo de búsqueda para filtrar productos por nombre o código */}
                <Search
                    placeholder="Buscar por nombre o código"
                    onSearch={(value) => setSearchTerm(value)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    style={{ width: isMobile ? '100%' : '250px' }}
                />

                {/* Menú desplegable para filtrar productos por marca */}
                <Select
                    showSearch
                    placeholder="Filtrar por marca del repuesto buscado"
                    value={selectedBrand}
                    allowClear
                    style={{ width: isMobile ? '100%' : '250px' }}
                    onChange={(value) => setSelectedBrand(value)}
                    optionFilterProp="children" // Permite la búsqueda dentro de las opciones
                >

                    <Option value="Marca A">Marca A</Option>
                    <Option value="Marca B">Marca B</Option>
                    <Option value="Marca C">Marca C</Option>
                </Select>

                {/* Menú desplegable para filtrar productos por tipo */}
                <Select
                    showSearch
                    placeholder="Filtrar por tipo de repuesto buscado"
                    value={selectedType}
                    allowClear
                    style={{ width: isMobile ? '100%' : '250px' }}
                    onChange={(value) => setSelectedType(value)}
                    optionFilterProp="children" // Permite la búsqueda dentro de las opciones
                >

                    <Option value="Electrónico">Electrónico</Option>
                    <Option value="Mecánico">Mecánico</Option>
                    <Option value="Resistencia">Resistencia</Option>
                </Select>

                {/* Botón para limpiar todos los filtros */}
                <Button onClick={clearFilters} type="default" style={{ width: isMobile ? '100%' : 'auto' }}>
                    Borrar Filtros
                </Button>
            </Space>

            {/* Muestra los productos filtrados en una cuadrícula responsiva */}
            <Row gutter={[16, isMobile ? 8 : 16]}>
                {filteredProducts.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={product.name} src={product.imageUrl} style={{ height: isMobile ? '150px' : '200px', objectFit: 'cover' }} />}
                            style={{ borderRadius: '8px', marginBottom: isMobile ? '10px' : '20px' }}
                        >
                            {/* Muestra el nombre, código y precio del producto */}
                            <Card.Meta title={`${product.name} - ${product.code}`} description={product.price} />
                            <p style={{ marginTop: '10px', fontSize: isMobile ? '0.8em' : '1em' }}>
                                <strong>Marca:</strong> {product.brand} <br />
                                <strong>Tipo:</strong> {product.type} <br />
                                {product.description}
                            </p>
                            {/* Botón para agregar el producto al carrito */}
                            <Button type="primary" block style={{ marginTop: '10px', fontSize: isMobile ? '0.8em' : '1em' }}>
                                Agregar al Carrito
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Tienda;

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Input, Select, Space, message } from "antd";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom"; // Para la navegación
import { apiClient } from "../config"; // Axios configurado con interceptores

const { Search } = Input;
const { Option } = Select;

function Tienda({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const navigate = useNavigate(); // Hook para navegación

    // Cargar productos desde el backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiClient.get("/api/products");
                const productsWithImages = response.data.map((product) => ({
                    ...product,
                    imageUrl: getImageUrl(product.type),
                }));
                setProducts(productsWithImages);
            } catch (error) {
                message.error("Error al cargar los productos.");
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []);

    // Función para asignar imágenes dinámicamente según el tipo de producto
    const getImageUrl = (type) => {
        const images = {
            Motor: "/r1.png",
            Electrónico: "/r2.png",
            Resistencia: "/r3.png",
            Mecánico: "/r4.png",
        };
        return images[type] || "/r1.png";
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.code.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
        const matchesType = selectedType ? product.type === selectedType : true;

        return matchesSearch && matchesBrand && matchesType;
    });

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedBrand(null);
        setSelectedType(null);
    };

    // Redirigir al detalle del producto
    const handleViewDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div style={{ padding: isMobile ? "10px" : "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: isMobile ? "10px" : "20px" }}>Tienda</h1>
            <p style={{ textAlign: "center", marginBottom: isMobile ? "10px" : "20px" }}>Explora nuestros productos</p>

            <Space
                direction={isMobile ? "vertical" : "horizontal"}
                style={{ marginBottom: "20px", width: "100%", justifyContent: "center" }}
                wrap={true}
            >
                <Search
                    placeholder="Buscar por nombre o código"
                    onSearch={(value) => setSearchTerm(value)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    style={{ width: isMobile ? "100%" : "250px" }}
                />

                <Select
                    showSearch
                    placeholder="Filtrar por marca del repuesto buscado"
                    value={selectedBrand}
                    allowClear
                    style={{ width: isMobile ? "100%" : "250px" }}
                    onChange={(value) => setSelectedBrand(value)}
                >
                    {[...new Set(products.map((p) => p.brand))].map((brand) => (
                        <Option key={brand} value={brand}>
                            {brand}
                        </Option>
                    ))}
                </Select>

                <Select
                    showSearch
                    placeholder="Filtrar por tipo de repuesto buscado"
                    value={selectedType}
                    allowClear
                    style={{ width: isMobile ? "100%" : "250px" }}
                    onChange={(value) => setSelectedType(value)}
                >
                    {[...new Set(products.map((p) => p.type))].map((type) => (
                        <Option key={type} value={type}>
                            {type}
                        </Option>
                    ))}
                </Select>

                <Button onClick={clearFilters} type="default" style={{ width: isMobile ? "100%" : "auto" }}>
                    Borrar Filtros
                </Button>
            </Space>

            <Row gutter={[16, isMobile ? 8 : 16]}>
                {filteredProducts.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt={product.name}
                                    src={product.imageUrl}
                                    style={{ height: isMobile ? "150px" : "200px", objectFit: "cover" }}
                                />
                            }
                            style={{ borderRadius: "8px", marginBottom: isMobile ? "10px" : "20px" }}
                        >
                            <Card.Meta title={`${product.name} - ${product.code}`} description={`$${product.price}`} />
                            <Button
                                type="primary"
                                block
                                style={{ marginTop: "10px", fontSize: isMobile ? "0.8em" : "1em" }}
                                onClick={() => onAddToCart(product)} // Simular agregar al carrito
                            >
                                Agregar al Carrito
                            </Button>
                            <Button
                                type="default"
                                block
                                style={{ marginTop: "10px", fontSize: isMobile ? "0.8em" : "1em" }}
                                onClick={() => handleViewDetails(product.id)}
                            >
                                Ver Detalles
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Tienda;

// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
    return (
        <header>
            <Navbar expand="lg" sticky="top" className="navbar-custom">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>RepueStock</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tienda">
                                <Nav.Link>Tienda</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Cuenta" id="account-dropdown">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/profile/add-address">
                                    <NavDropdown.Item>Agregar Dirección</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/profile/edit-address">
                                    <NavDropdown.Item>Editar Dirección</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/login">
                                    <NavDropdown.Item>Iniciar Sesión</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <NavDropdown.Item>Registrarse</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => { /* Aquí puedes agregar lógica de cierre de sesión en el futuro */ }}>
                                    Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <ShoppingCartOutlined style={{ fontSize: '20px', marginLeft: '15px' }} />
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;

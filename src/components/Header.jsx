// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Header({ userName }) {
    console.log("Nombre de usuario recibido en Header:", userName); // Verifica el nombre recibido

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="#home">Repuestock</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#catalog">Catálogo</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                        <NavDropdown title={userName || "Usuario"} id="user-dropdown" align="end">
                            <NavDropdown.Item href="#profile">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
